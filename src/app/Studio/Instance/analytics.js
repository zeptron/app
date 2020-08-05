import React, { useContext, useEffect, useState } from 'react';
import AWS from 'aws-sdk';
import { Bar } from 'react-chartjs-2';
import Spacer from 'react-spacer';
import { Box, Button, Grid } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import moment from 'moment';

import UserContext from '../../../UserContext';
import useQuery from '../../../graphql/useQuery';
import * as queries from '../../../graphql/queries';

import s from '../../../styles/styles.module.css';

export default function Analytics({ match }) {
  const MODES = {
    MIN5: {
      key: 'MIN5',
      title: '5 min',
      seconds: 5 * 60,
    },
    MIN30: {
      key: 'MIN30',
      title: '30 min',
      seconds: 30 * 60,
    },
    HOUR1: {
      key: 'HOUR1',
      title: '1 hour',
      seconds: 60 * 60,
    },
  };

  const [mode, setMode] = useState(MODES.MIN5.key);
  const [chartData, setChartData] = useState([]);

  const { user } = useContext(UserContext);

  const modelQuery = useQuery(queries.listModelConfigs, {
    onSuccess: ({ data }) => {
      AWS.config.update({
        region: process.env.REACT_APP_AWS_REGION,
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
      });

      const DynamoDB = new AWS.DynamoDB();

      DynamoDB.scan({
        // TODO 30.07.2020 yelysei: remove test data
        //TableName: 'tableNamecd1fb1d0-b93f-4b58-a049-2036f174d1ea',
         TableName: data?.listModelConfigs?.items?.[0]?.tableName,
      }, (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        setChartData(data.Items);
      });
    },
  });

  useEffect(() => {
    modelQuery.fetch({
      filter: {
        userID: {
          eq: user.username,
        },
        id: {
          eq: match.params.id,
        },
      },
    });
  }, []);

  if (modelQuery.loading || !modelQuery.data) {
    return <>Loading...</>;
  }

  const modelConfig = modelQuery.data?.listModelConfigs?.items?.[0];

  const COLORS = [
    '#cc241d',
    '#458588',
    '#d79921',
    '#83a598',
    '#689d6a',
    '#fb4934',
    '#d3869b',
    '#b16286',
    '#8ec07c',
    '#fabd2f',
  ];

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.5,
    // animation: {
    //   duration: 0,
    // },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          gridLines: {
            drawBorder: false,
            zeroLineWidth: 0,
            zeroLineColor: '#ffffff',
            borderDash: [2, 3],
          },
        },
      ],
      xAxes: [
      ],
    },
    layout: {
      padding: {
        right: 50,
      },
    },
  };

  const generateData = () => {
    const labels = Object.keys(chartData?.[0] ?? {}).filter((item) => item !== 'timestamp');

    const chartDataFormatted = chartData
      .map((item) => ({ ...item, timestamp: moment(item.timestamp.S).unix() }))
      .sort((a, b) => a.timestamp - b.timestamp);

    const from = Math.floor((chartDataFormatted[0]?.timestamp ?? 0) / MODES[mode].seconds) * MODES[mode].seconds;
    const to = Math.ceil((chartDataFormatted[chartDataFormatted.length - 1]?.timestamp ?? 0) / MODES[mode].seconds) * MODES[mode].seconds;

    const periods = [];

    for (let i = from; i < to; i += MODES[mode].seconds) {
      periods.push({
        from: i,
        to: i + MODES[mode].seconds,
      });

      labels.forEach((label) => {
        periods[periods.length - 1][label] = 0;
      });
    }

    periods.forEach((period, i) => {
      chartDataFormatted
        .filter((item) => item.timestamp >= period.from && item.timestamp < period.to)
        .forEach((item) => {
          labels.forEach((label) => {
            periods[i][label] += periods[i][label] + parseInt(item[label].N, 10);
          });
        });
    });

    console.log(periods);
    const data = {
      labels: periods?.map((period) => {
        return `${moment(period.from * 1000).format('DD MMM')} ${moment(period.from * 1000).format('hh:mm')} - ${moment(period.to * 1000).format('hh:mm')}`;
      }),
      datasets: labels.map((label, index) => ({
        label: label,
        data: periods?.map((item) => item[label]),
        backgroundColor: COLORS[index % COLORS.length],
      })),
    };
    console.log(data);

    return data;
  };

  return (
    <div>
      <Box bgcolor="primary.dark" color="primary.contrastText" p={4}>
        <h1 className={s.header} style={{ textAlign: 'center' }}>
          {modelConfig.instanceName}
        </h1>
      </Box>

      <Box>
        <Spacer height="100px"/>
        <Grid container alignItems="center" justify="center">
          <Grid item md={8}>
            <Button
              href={`/studio/${match.params.id}/`}
              variant="contained"
              color="primary"
              size="large"
            >
              Video
            </Button>
            <Button variant="contained" color="secondary" size="large">
              Stop
            </Button>
            <Spacer height="50px"/>
            <h2>Charts</h2>
            <div className={s.chartSelectorWrapper}>
              <div className={s.chartSelectorText}>Group by: </div>
              <ButtonGroup size="small" color="primary" aria-label="contained primary button group">
                {Object.values(MODES).map(({ key, title }) => (
                  <Button
                    color={key === mode ? 'secondary' : 'primary'}
                    onClick={() => setMode(key)}
                  >
                    {title}
                  </Button>
                ))}
              </ButtonGroup>
            </div>
            <Grid container alignItems="center" justify="center" spacing={2}>
              <Bar
                data={generateData()}
                options={options}
                redraw
              />
            </Grid>
          </Grid>
        </Grid>
        <Spacer height="100px"/>
      </Box>
    </div>
  );
}

import React, { useContext, useEffect, useMemo, useState } from 'react';
import AWS from 'aws-sdk';
import { Bar } from 'react-chartjs-2';
import Spacer from 'react-spacer';
import { Box, Button, Grid, Hidden } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import moment from 'moment';
import RefreshIcon from '@material-ui/icons/Refresh';
import VideocamIcon from '@material-ui/icons/Videocam';
import UserContext from '../../../UserContext';
import useQuery from '../../../graphql/useQuery';
import * as queries from '../../../graphql/queries';
import Loader from '../Components/Loader'
import s from '../../../styles/styles.module.css';

export default function Analytics({ match }) {
  const MODES = {
    MIN5: {
      key: 'MIN5',
      title: '5 min',
      seconds: 5 * 60, // 5 minutes
      timeFrom: 60 * 60, // 1 hour
    },
    MIN30: {
      key: 'MIN30',
      title: '30 min',
      seconds: 30 * 60, // 30 minutes
      timeFrom: 60 * 60 * 12, // 12 hours
    },
    HOUR1: {
      key: 'HOUR1',
      title: '1 hour',
      seconds: 60 * 60, // 1 hour
      timeFrom: 60 * 60 * 24, // 24 hours
    },
    DAY1: {
      key: 'DAY1',
      title: '1 day',
      seconds: 1440 * 60, // 1 day
      timeFrom: 1440 * 60 * 168, // 7 days
    },
  };

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

  const [mode, setMode] = useState(MODES.MIN5.key);
  const [analytics, setAnalytics] = useState([]);
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
        TableName: 'tableNamea6849f7e-76ef-4adb-9657-fce1207de856',
        //TableName: data?.listModelConfigs?.items?.[0]?.tableName,
      }, (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        setAnalytics(data.Items);
      });
    },
  });

  useEffect(() => {
    document.title = `Zeptron - Analytics | ${modelQuery.data?.listModelConfigs?.items?.[0].instanceName}`
  }, []);


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

  const chartData = useMemo(() => {
    const labels = Object.keys(analytics?.[0] ?? {}).filter((item) => item !== 'timestamp');

    const analyticsFormatted = analytics
      .map((item) => ({ ...item, timestamp: moment(item.timestamp.S, 'DD/MM/YYYY HH:mm:ss').unix() }))
      .filter((item) => item.timestamp >= moment().unix() - MODES[mode].timeFrom)
      .sort((a, b) => a.timestamp - b.timestamp);

    const from = Math.floor((analyticsFormatted[0]?.timestamp ?? 0) / MODES[mode].seconds) * MODES[mode].seconds;
    const to = Math.ceil((analyticsFormatted[analyticsFormatted.length - 1]?.timestamp ?? 0) / MODES[mode].seconds) * MODES[mode].seconds;

    const periods = [];

    for (let i = from; i < to; i += MODES[mode].seconds) {
      const item = {
        from: i,
        to: i + MODES[mode].seconds,
      };

      labels.forEach((label) => {
        item[label] = 0;
      });

      periods.push(item);
    }

    periods.forEach((period, i) => {
      analyticsFormatted
        .filter((item) => item.timestamp >= period.from && item.timestamp < period.to)
        .forEach((item) => {
          labels.forEach((label) => {
            periods[i][label] += parseInt(item[label].N, 10);
          });
        });
    });

    return {
      labels: periods?.map((period) => {
        return `${moment(period.from * 1000).format('DD MMM')} ${moment(period.from * 1000).format('hh:mm')} - ${moment(period.to * 1000).format('hh:mm')}`;
      }),
      datasets: labels.map((label, index) => ({
        label: label,
        data: periods?.map((item) => item[label]),
        backgroundColor: COLORS[index % COLORS.length],
      })),
    };
  }, [analytics, mode]);

  const summaryData = useMemo(() => {
    const labels = Object.keys(analytics?.[0] ?? {}).filter((item) => item !== 'timestamp')
      .map((item) => ({
        label: item,
        value: 0,
      }));

    analytics
      .filter((item) => moment(item.timestamp.S, 'DD/MM/YYYY HH:mm:ss').unix() >= moment().unix() - MODES[mode].timeFrom)
      .forEach((item) => {
      labels.forEach(({ label }, i) => {
        labels[i].value += parseInt(item[label].N, 10);
      })
    });

    return labels;
  }, [analytics, mode]);

  if (modelQuery.loading || !modelQuery.data) {
    return <Loader/>;
  }

  const modelConfig = modelQuery.data?.listModelConfigs?.items?.[0];

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
    legend: {
      display: false,
    },
    layout: {
      padding: {
        right: 50,
      },
    },
  };

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <Box p={4}>
      <Spacer height="80px"/>

        <h1 className={s.header} style={{textAlign: 'center'}}>
          {modelConfig.instanceName}
        </h1>
        <Grid container alignItems="center" justify="center">
          <Grid item md={10}>
            <Hidden smUp>
            <div>
            <Button
            style={{marginLeft: 5}}
            href={`/app/${modelConfig.id}/`}
            variant="contained"
            color="secondary"
            size="small"
            >
            <VideocamIcon/>
            </Button>
            <Button
            style={{marginLeft: 5}}
            onClick={refreshPage}
            variant="contained"
            color="primary"
            size="small"
            >
            <RefreshIcon/>
            </Button>
            </div>
            </Hidden>
            <Spacer height="30px"/>
            
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
            
            <div className={s.chartSelectorWrapper2}>
              <div className={s.chartSelectorText}>Group by: </div>
              <ButtonGroup size="small" color="primary" aria-label="contained primary button group">
                {Object.values(MODES).map(({ key, title }) => (
                  <Button
                    key={key}
                    color={key === mode ? 'secondary' : 'primary'}
                    onClick={() => setMode(key)}
                  >
                    {title}
                  </Button>
                ))}
              </ButtonGroup>
            </div>
            <Hidden xsDown>
            <div className={s.chartSelectorWrapper}>
            <Button
            style={{marginLeft: 5}}
            href={`/app/studio/${modelConfig.id}/`}
            variant="contained"
            color="secondary"
            size="small"
            >
            <VideocamIcon/>
            </Button>
            <Button
            style={{marginLeft: 5}}
            onClick={refreshPage}
            variant="contained"
            color="primary"
            size="small"
            >
            <RefreshIcon/>
            </Button>
            </div>
            </Hidden>
             </div>
            <div className={s.legend}>
              {summaryData.map(({ label, value }, index) => (
                <div className={s.legendItem}>
                  <div className={s.legendColor} style={{ backgroundColor: COLORS[index % COLORS.length] }}/>
                  <div><b>{label}</b>: {value}</div>
                </div>
              ))}
            </div>
            <Grid container alignItems="center" justify="center" spacing={2}>
              <Grid xs={12}>
              <Bar
                data={chartData}
                options={options}
                redraw
              />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Spacer height="50px"/>
        <Grid container alignItems="center" justify="center">
                      <h3 className={s.ocr}>{modelConfig.publicIP}</h3><h3 className={s.ocr}>·</h3> <h3 className={s.ocr}>5555</h3>
                      </Grid>
                      <Grid container alignItems="center" justify="center">
                      <h3 style={{color: 'white'}} className={s.ocr}>{modelConfig.model.name}</h3>
                      </Grid>
                      <Grid container alignItems="center" justify="center">
                      <h3 style={{color: 'white'}}  className={s.ocr}>{modelConfig.instanceLocation}</h3>
                      </Grid>
        <Spacer height="100px"/>
      </Box>
    </div>
  );
}

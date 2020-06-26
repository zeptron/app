exports.handler = async (event) => {

    const fs = require('fs')
    const SSH = require('simple-ssh');
    const pemfile = 'my.pem';
    const user = 'ec2-user';
    const host = '{event.privateIP}.region.compute.internal';
  
    // all this config could be passed in via the event
    const ssh = new SSH({
      host: host,
      user: user,
      key: fs.readFileSync(pemfile)
    });
  
    let cmd = "ls";
    if (event.cmd == "long") {
      cmd += " -l";
    }
  
    let prom = new Promise(function(resolve, reject) {
  
      let ourout = "";

      // 1. please set me up with if statements based on the booleans 
      // so that I can create different script configurations based on the booleans 

      // e.g. if count is True, 
        // ssh.exec('xvfb-run python3 --count ${count} --countClasses ${countClasses} 

      // I need the if statements because if count is False, I do not need to pass ${countClasses}

      // 2. please pass in all of the parameters from the table that are associated with modelConfigID

      // 3. if fromFile is true, I need you to do one extra step 
      // execute: 
      // wget {fileURL}
      // filename = whatever the result of wget saving_as is 
      // so then I can pass ${filename} in the python script

      // not sure how to do that .. best to leave to the expert

      // I should be able to take it from there 
      
  
      ssh.exec('xvfb-run python3 ${count} ${count} ', {
        exit: function() {
          ourout += "\nsuccessfully exited!";
          resolve(ourout);
        },
        out: function(stdout) {
          ourout += stdout;
        }
      }).start({
        success: function() {
          console.log("successful connection!");
        },
        fail: function(e) {
          console.log("failed connection, boo");
          console.log(e);
        }
      });
  
    });
  
    const res = await prom;
  
    const response = {
      statusCode: 200,
      body: res,
    };
    return response;
  };
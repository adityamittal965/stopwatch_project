// 14 - Exercise - Stopwatch

// 1. Using Normal Functions in Constructors
function StopWatch1() {
    let startTime,
      endTime,
      running,
      duration = 0;

    this.start = function(){
      if (running) throw new Error("Stopwatch is already started");
      running = true;
      startTime = new Date();
    };

    this.stop = function(){
      if (!running) throw new Error("Stopwatch is already stopped");
      running = false;
      endTime = new Date();
      const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
      duration += seconds;
    };

    this.reset = function(){
      startTime = null;
      endTime = null;
      running = false;
      duration = 0;
    };

    Object.defineProperty(this, "duration", {
      get: function(){
        return duration;
      },
    });
  }



// 2. Using Arrow Functions in Constructor
function StopWatch2() {
    let startTime,
      endTime,
      running,
      duration = 0;

    this.start = () => {
      if (running) throw new Error("Stopwatch is already started");
      running = true;
      startTime = new Date();
    };

    this.stop = () => {
      if (!running) throw new Error("Stopwatch is already stopped");
      running = false;
      endTime = new Date();
      const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
      duration += seconds;
    };

    this.reset = () => {
      startTime = null;
      endTime = null;
      running = false;
      duration = 0;
    };

    Object.defineProperty(this, "duration", {
      get: () => {
        return duration;
      },
    });
  }



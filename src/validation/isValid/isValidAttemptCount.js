class IsValidAttemptCount {
    static integer(attemptCount) {
        return Number.isInteger(attemptCount);
    }

    static plus(attemptCount){
        return attemptCount > 0;
    }
  }
  
export default IsValidAttemptCount;
  
const StringHandler = { 
  stringToArray(string, separator = ',') {
    return string.split(separator);
  }
}

export default StringHandler;
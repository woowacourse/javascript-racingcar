export const style = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

    body, input, button {
      font-family: Roboto, sans-serif;
    }

    body {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
    }
    
    #app {
      width: 544px;
      background: #FFFFFF;
      border: 1px solid rgba(0, 0, 0, 0.12);
      box-sizing: border-box;
      border-radius: 4px;
      margin-top: 56px;
      padding-bottom: 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .hidden {
      display: none;
    }

    .car-names-input-container, .racing-count-input-container {
      display: flex;
      align-items: end;
    }
  </style>
`;

export const header = `
  margin: 36px 0px;
  font-size: 34px;
  font-weight: 600;
  line-height: 36px;
`;

export const directive = `
  margin: 7.5px 0px 0px 0px;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: #000000;
`;

export const input = `
  width: 360px;
  height: 36px;
  border: 1px solid #B4B4B4;
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  padding-left: 8px;
  margin-top: 4px;

  font-size: 15px;
  color: #8B8B8B;
`;

export const button = `
  width: 66px;
  height: 36px;
  padding: 6px 6px 6px 8px;
  margin-left: 16px;
  background: #00BCD4;
  border: none;
  border-radius: 4px;

  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.25px;
  color: #FFFFFF;;
`;

export const winner = `
  margin: 24px 0px;
	font-weight: 600;
	font-size: 20px;
	color: #000000;
  text-align: center;
`;

export const carName = `
	width: 96px;
	height: 36px;
	background: #F5F5F5;
	border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const carContainer = `
	display: flex;
	flex-direction: column;
  align-items: center;
`;

export const carsContainer = `
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export const arrow = `
  vertical-align: middle;
`;

export const restartButtonContainer = `
  display: flex;
  justify-content: center;
`;

export const restartButton = `
	width: 152px;
	height: 36px;
  border: none;
	border-radius: 4px;
	background-color: #00BCD4;
	font-weight: bold;
	font-size: 14px;
	line-height: 16px;
	color: #FFFFFF;
`;

export const spinner = `
  width: 30px;
  margin-top: 10px;
  transform: rotate(1deg);
`;

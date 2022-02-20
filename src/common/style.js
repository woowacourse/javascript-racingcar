const color = {
  black: '#000000',
  car: '#F5F5F5',
  input_border: '#B4B4B4',
  mint: '#00BCD4',
  placeholder: '#8B8B8B',
  white: '#FFFFFF',
};

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

    form {
      display: flex;
      align-items: end;
    }
    
    #app {
      width: 544px;
      background: ${color.white};
      border: 1px solid rgba(0, 0, 0, 0.12);
      box-sizing: border-box;
      border-radius: 4px;
      margin-top: 56px;
      padding-bottom: 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    img.loading {
      margin-top: 15px;
      animation: loading_spin 1s linear infinite;
      transform-origin: 50% 50%;
    }

    @keyframes loading_spin {
      100% {
        transform: rotate(360deg);
      }
    }
  </style>
`;

export const header = `
  margin: 36px 0 30px;
  font-size: 34px;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0;
  text-align: center;
`;

export const directive = `
  display: inline-block;
  margin-top: 7px;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.5px;
  color: ${color.black};
`;

export const input = `
  width: 360px;
  height: 36px;
  border: 1px solid ${color.input_border};
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;
  padding-left: 8px;
  margin-top: 4px;

  font-size: 15px;
  line-height: 24px;
  color: ${color.placeholder};

  outline: none;
`;

export const button = `
  width: 65px;
  height: 36px;
  padding: 6px 6px 6px 8px;
  margin-left: 16px;
  background: ${color.mint};
  border: none;
  border-radius: 4px;

  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 1.25px;
  color: ${color.white};
`;

export const moveForward = `
  display: flex;
  justify-content: center;
`;

export const winner = `
  margin: 24px 0;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: ${color.black}
`;

export const carName = `
  width: 96px;
  height: 36px;
  background: ${color.car};
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
  background-color: ${color.mint};
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: ${color.white}
`;

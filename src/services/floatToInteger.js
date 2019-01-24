// @flow
const floatToInteger = (max: number, float = Math.random()) => Math.floor(float * (max + 1));
export default floatToInteger;

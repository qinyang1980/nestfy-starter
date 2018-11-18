import { configDevelopment } from './config.dev';
import { configProduction } from './config.prod';
import { commonSetting } from './setting';

const DEV = 'development';
let env = process.env.NODE_ENV || DEV;
env = env.toLowerCase();

const getConfig = () => {
  return env === DEV ? configDevelopment : configProduction;
};

// 将setting跟config合并
const config = Object.assign({}, getConfig(), commonSetting);

export default config;

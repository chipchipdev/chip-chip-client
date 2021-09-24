export type LanguageMap = {
  HOME_PAGE_SLOGAN: string,
  START_GAME_BUTTON: string,
  TABLE_ID_PLACEHOLDER: string,
  PARTICIPANT_NAME_PLACEHOLDER: string,
  MISSING_ROOM_ID: string,
  MISSING_PARTICIPANT_NAME: string,
  START_CONNECTION_BUTTON: string,
};

type LanguageMapI18n = {
  enUS: LanguageMap;
  zhCN: LanguageMap;
};

export const LANGUAGE_MAP: LanguageMapI18n = {
  enUS: {
    HOME_PAGE_SLOGAN: 'Cute tool for playing Poker with your Friends!',
    START_GAME_BUTTON: 'GET STARTED',
    TABLE_ID_PLACEHOLDER: 'Table ID',
    PARTICIPANT_NAME_PLACEHOLDER: 'Enter Your Name',
    MISSING_ROOM_ID: 'Room ID is missing',
    MISSING_PARTICIPANT_NAME: 'Participant name is missing',
    START_CONNECTION_BUTTON: 'JOIN A TABLE',
  },
  zhCN: {
    HOME_PAGE_SLOGAN: '和朋友们坐在一起Poker吧！剩下的事情交给我就好',
    START_GAME_BUTTON: '开始',
    TABLE_ID_PLACEHOLDER: '房间号',
    PARTICIPANT_NAME_PLACEHOLDER: '玩家名',
    MISSING_ROOM_ID: '请填写房间ID',
    MISSING_PARTICIPANT_NAME: '请为自己起个名',
    START_CONNECTION_BUTTON: '加入房间',
  },
};

export const WebsocketUri = 'ws://192.168.1.4:4000/graphql';
export const HTTPUri = 'http://192.168.1.4:4000/graphql';

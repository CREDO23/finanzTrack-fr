enum BrowserStorageActionType {
    'SET_NEW_DATA' = 'SET_NEW_DATA',
  }
  
  interface BrowserStoragePayloadType {
    SET_NEW_DATA: {
        key: string;
        value: any
    };
  }
  
  interface BrowserStorageAction {
    type: BrowserStorageActionType;
    payload: BrowserStoragePayloadType[BrowserStorageAction['type']];
  }
  
  /* =========== HANDLERS ============= */
  
  function setData(
    payload: BrowserStoragePayloadType["SET_NEW_DATA"],
  ):  BrowserStoragePayloadType["SET_NEW_DATA"] {

    return payload;
  }

  function persistData() : BrowserStorage {
    return JSON.parse(localStorage.getItem('root') as string)
  }
  
  export type { BrowserStorageAction, BrowserStoragePayloadType };
  export { setData,persistData, BrowserStorageActionType };
  
enum BrowserStorageActionType {
    'SET_DATA' = 'SET_DATA',
  }
  
  interface BrowserStoragePayloadType {
    SET_DATA: {
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
    payload: BrowserStoragePayloadType["SET_DATA"],
  ):  BrowserStoragePayloadType["SET_DATA"] {

    return payload;
  }

  function persistData() : BrowserStorage {
    return typeof window != 'undefined' && JSON.parse(localStorage.getItem('root') as string)
  }
  
  export type { BrowserStorageAction, BrowserStoragePayloadType };
  export { setData,persistData, BrowserStorageActionType };
  
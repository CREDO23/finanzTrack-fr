enum BrowserStorageActionType {
    'SET_DATA' = 'SET_DATA',
  }
  
  interface BrowserStoragePayloadType {
    SET_DATA: {
        key: string;
        value: any
    };
  }
  
  /**
 * @interface BrowserStorageAction: The action interface for the Broaser storage reducer
 * 
 * @field type: The action type : (@example "SET_DATA")
 * @field payload: The payload for an action (@see BrowserStoragePayloadType)
 */
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

  /**
   * @function persistData: Helps to retrieve data from the browser storage when reloading
   * a page
   * @returns the browser storage value
   */
  function persistData() : BrowserStorage {
    return typeof window != 'undefined' && JSON.parse(localStorage.getItem('root') as string)
  }
  
  export type { BrowserStorageAction, BrowserStoragePayloadType };
  export { setData,persistData, BrowserStorageActionType };
  
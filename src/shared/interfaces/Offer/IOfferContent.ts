export default interface IOfferContent {
  title: string
  description: string
  dark_btn: DarkBtn
  ghost_btn: GhostBtn
}

export interface DarkBtn {
    text: string
    anchor: string
  }
  
  export interface GhostBtn {
    text: string
    anchor: string
  }
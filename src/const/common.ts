// import { AppAutocompleteOption } from "/components/inputs/AppAutocomplete";
import { AppAutocompleteOption } from "../components/inputs/AppAutocomplete";

/**オートコンプリートの初期化
 *   @return [{ id: "", label: "未選択" }]
  */
export const initOption:AppAutocompleteOption[] = [{ id: "", label: "未選択" }];


/**ロケーションとタイトルの定数
 *
  */
 export const title = [
  {location:"/",title:"ログイン"},
  {location:"/Application/Search",title:"申請情報検索"},
  {location:"/Application/CustDetail",title:"得意先マスタ申請"},
  {location:"/SearchCompany",title:"企業情報検索"},
  {location:"/CompanyInfo",title:"企業情報"},
  {location:"/CompanyRegist",title:"企業情報登録"},
  {location:"/CsvImport",title:"CSVインポート"},
  {location:"/MgmtUsers",title:"ユーザー管理"},
  {location:"/DetailUser",title:"ユーザー管理"},
  {location:"/Application/EonlyDetail",title:"得意先マスタ申請（E単独）"},
  {location:"/",title:""},
  {location:"/",title:""},
  {location:"/",title:""},
  {location:"/",title:""},
  {location:"/",title:""},
]
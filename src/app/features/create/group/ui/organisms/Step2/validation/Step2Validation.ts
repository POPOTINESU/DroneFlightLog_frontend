import * as Yup from "yup";
export const ValidationSchema = Yup.object().shape({
  sets: Yup.array().of(
    Yup.object().shape({
      droneNumber: Yup.string().required("ドローン番号を入力してください"),
      JUNumber: Yup.string()
        .required("機体登録番号を入力してください")
        // JUから始まる
        .matches(/JU/, "機体登録番号はJUから始まる番号を入力してください"),
      purchaseDate: Yup.string().required("購入日を入力してください"),
    })
  ),
});

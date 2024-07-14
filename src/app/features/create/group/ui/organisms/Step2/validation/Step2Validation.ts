import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
  sets: Yup.array().of(
    Yup.object().shape({
      droneNumber: Yup.string().required("ドローン番号を入力してください"),
      JUNumber: Yup.string()
        .required("機体登録番号を入力してください")
        // JUから始まる
        .matches(/^JU/, "機体登録番号はJUから始まる番号を入力してください"),
      purchaseDate: Yup.string()
        .required("購入日を入力してください")
        // 購入日が今日以前の日付であることを確認する
        .test(
          "is-past-date",
          "購入日は今日以前の日付を入力してください",
          function (value) {
            if (!value) return false;
            const today = new Date();
            const purchaseDate = new Date(value);
            return purchaseDate <= today;
          }
        ),
    })
  ),
});
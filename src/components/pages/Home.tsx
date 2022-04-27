
// import { AuthInfoContext} from '../components/common/AuthContextProvider';
import React, { useContext, useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';
import { Container, Grid, Input, Select, MenuItem } from '@mui/material';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { AppTextfield } from '../inputs/AppTextfield';
import { AppCheckbox } from '../inputs/AppCheckbox';
import { AppListItem } from '../elements/AppListItem';
import { AppBox } from '../elements/AppBox';
import {AppButton} from '../inputs/AppButton';
import { MainBody } from '../common/MainBody';
import { AppSelect, AppSelectOption } from '../inputs/AppSelect';

import { useHistory } from "react-router-dom";

// フォームの型宣言
type FormType = {
  PdfFile?: any;
  ZipFile?: any;
  PageSize: string|number;
  TempCheck: boolean;
  TempImg?: any;
  TempSize: string|number;
  isDisplay: string;
  result: boolean;
  message: string;
};

// 原稿サイズ
const PageSizeOptions: AppSelectOption[] = [
  { label: "元のまま", value: "0" },
  { label: "A6(文庫サイズ)", value: "A6" },
  { label: "B6", value: "B6" },
];

// テンプレートサイズ
const TempSizeOptions: AppSelectOption[] = [
  { label: "元のまま", value: "none" },
  { label: "B5(原稿サイズA6推奨)", value: "A6" },
  { label: "A4(原稿サイズB6推奨)", value: "B6" },
];

export const Home = () => {

  const defaultValues = {
    TempCheck:false,
    isDisplay: "none",
    result: true,
    message: "",
    PageSize: PageSizeOptions[0].value,
    TempSize: TempSizeOptions[0].value
  };

  const methods = useForm<FormType>({defaultValues})

  const { setValue, watch, formState: { errors } } = methods;

  const watchisDisplay = watch("isDisplay");
  const watchResult = watch("result",true)
  const watchMessage = watch("message","")
  // プログレスバーのstate
  const [progress, setProgress] = useState(false);

  const onSubmit: SubmitHandler<FormType> = (data) => {
    console.log(data)
  }

  const onChange: SubmitHandler<FormType> = (values) => {
    if (values.TempCheck){
      setValue("isDisplay", "")
    }else{
      setValue("isDisplay", "none")
    }
  }

  // const handleChangePS = (event: SelectChangeEvent) => {
  //   setValue("PageSize", event.target.value);
  // };

    return (
      <MainBody methods={methods} result={watchResult} message={watchMessage} progress={progress}>
          <Container maxWidth={false}  sx={{ pt: 5, }}>
            <AppBox label="面付けメニュー">
              <Grid container  rowSpacing={2} justifyContent="flex-start" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                  <AppListItem label="PDFファイル選択" >
                    <Input type="file"
                    inputProps={{ accept: 'application/pdf' }}
                    name="PdfFile"
                    />
                  </AppListItem>
                </Grid>
                <Grid item xs={12}>
                  <AppListItem label="原稿サイズ変更" >
                  <AppSelect
                    name="PageSize"
                    items={PageSizeOptions}
                    sx={{ width: 200 }}
                    />
                  </AppListItem>
                </Grid>
                <Grid item xs={12}>
                  <AppListItem label="テンプレート使用" >
                  <AppCheckbox
                    name="TempCheck"
                    // label=""
                    onChange={methods.handleSubmit(onChange)}
                  />
                  </AppListItem>
                </Grid>
              </Grid>

              <Grid container display={watchisDisplay} rowSpacing={2} justifyContent="flex-start" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12}>
                  <AppListItem label="テンプレートファイル選択" >
                    <Input type="file"
                    inputProps={{ accept: 'application/pdf' }}
                    name="PdfFile"
                    />
                  </AppListItem>
                </Grid>
                <Grid item xs={12}>
                  <AppListItem label="原稿サイズ変更" >
                    <AppSelect
                      name="TempSize"
                      items={TempSizeOptions}
                      sx={{ width: 200 }}
                      />
                  </AppListItem>
                </Grid>
              </Grid>

            </AppBox>

            <Grid container rowSpacing={2} justifyContent="flex-start" columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid item xs={12}>
              </Grid>
              <Grid item xs={12}>
                <AppButton onClick={methods.handleSubmit(onSubmit)}>登録</AppButton>
              </Grid>
              <Grid item xs={12}>
              </Grid>
            </Grid>

          </Container>
      </MainBody>
    )
};

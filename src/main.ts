import { appendClasspath, importClassAsync } from 'java-bridge';
import { OkCertClass as OkCertType } from './bridge/kcb/module/v3/OkCert';
import assign from './utils/assign';

interface IOkCert {
  /**
   * 타겟 : 운영/테스트 전환시 변경 필요 (테스트="TEST", 운영="PROD")
   */
  target: 'PROD' | 'TEST';
  /**
   * 라이센스 파일
   */
  license: string;
  /**
   * 모듈 파일
   */
  module: string;
  /**
   * 회원사코드
   */
  cp_cd: string;
  /**
   * 회원사 사이트 URL
   */
  site_url: string;
  /**
   * 사이트명, SMS인증번호문자에 표시됨
   */
  site_name: string;
}

interface IRequestPhoneAuth {
  return_url: string;
  site_name: string;
  site_url: string;
  rqst_caus_cd: string;
  return_msg?: string;
  chnl_cd?: string;
}

export default class OKCert {
  private target: string = 'PROD';
  private license: string = '';
  private cp_cd: string = '';
  private site_url: string = '';
  private site_name: string = '';

  constructor(options: IOkCert) {
    appendClasspath(options.module);
    this.target = options.target;
    this.license = options.license;
    this.cp_cd = options.cp_cd;
    this.site_url = options.site_url;
    this.site_name = options.site_name;
  }

  public getOKCertInstance = async () => {
    const OkCertClass = await importClassAsync<typeof OkCertType>('kcb.module.v3.OkCert');
    return OkCertClass;
  };

  public requestPhoneAuth = async (body: IRequestPhoneAuth) => {
    const OkCertClass = await this.getOKCertInstance();
    const OKCert = new OkCertClass();

    const SERVICE_NAME = 'IDS_HS_POPUP_START';

    const request_body = {
      RETURN_URL: body.return_url,
      SITE_NAME: body.site_name || this.site_name,
      SITE_URL: this.site_url,
      RQST_CAUS_CD: body.rqst_caus_cd,
      CHNL_CD: '0000', // 고정
      RETURN_MSG: '',
    };

    const assigned_body = assign(
      {
        RETURN_URL: '',
        SITE_NAME: '',
        SITE_URL: '',
        RQST_CAUS_CD: '0000',
        RETURN_MSG: '',
      },
      request_body,
    );

    const data = await OKCert.callOkCert(
      this.target,
      this.cp_cd,
      SERVICE_NAME,
      this.license,
      JSON.stringify(assigned_body),
    );

    if (!data) throw Error('@okcert3 :: callOkCert 값 오류');

    const result = JSON.parse(data);

    return result;
  };

  public confirmPhoneAuth = async (body: { mdl_tkn: string }) => {
    const OkCertClass = await this.getOKCertInstance();
    const OKCert = new OkCertClass();

    const SERVICE_NAME = 'IDS_HS_POPUP_RESULT';

    const request_body = {
      MDL_TKN: body.mdl_tkn,
    };

    const data = await OKCert.callOkCert(
      this.target,
      this.cp_cd,
      SERVICE_NAME,
      this.license,
      JSON.stringify(request_body),
    );

    if (!data) throw Error('@okcert3 :: callOkCert 값 오류');

    const result = JSON.parse(data);

    return result;
  };
}

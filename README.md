# KCB PASS 휴대폰 본인인증 팝업 거래 서비스: NodeJS 모듈

[코리아크레딧뷰로(주) 오케이네임](https://www.ok-name.co.kr/)(이하 "서비스제공업체") <br />
휴대폰 본인인증 팝업 거래 서비스 NodeJS 모듈입니다.

OKCert3 Java 1.5 서비스 모듈을 기반으로 구성했습니다.

본 모듈은 **서비스제공업체에서 공식적으로 제공하는 모듈이 아니며**, <br />
해당 모듈을 사용하여 발생하는 문제의 책임은 **모두 사용자에게 있음을 알려드립니다.**

## 설치하기

```
$ npm install okcert
```

```
$ yarn add okcert
```

`okcert`는 [`yarn berry (PnP - Plug'n'Play)`](https://github.com/yarnpkg/berry)를 지원하고 있습니다.

## 설정하기

```ts
new OKCert({
  // ...
  module: __dirname + '/모듈_파일_경로/모듈_파일.jar',
  license: __dirname + '/라이센스_파일_경로/라이센스_파일.dat',
  // ...
});
```

본 모듈은 서비스제공업체에서 공식적으로 제공하는 모듈이 아니기에 <br />
`Java 모듈 파일(jar)`의 경로를 `module`에 입력해주셔야 합니다.

서비스제공업체 담당자에게 전달받은 `모듈 파일`과 `라이센스 파일`의 경로를 입력해주세요.

## 예제

```ts
import OKCert from 'okcert';

const instance = new OKCert({
  target: 'PROD',
  module: __dirname + '/모듈_파일_경로/모듈_파일.jar',
  license: __dirname + '/라이센스_파일_경로/라이센스_파일.dat',
  cp_cd: 'P00000000001',
  site_name: 'example',
  site_url: 'example.com',
});

instance.requestPhoneAuth({
  return_url: 'example.com',
  site_name: 'example',
  site_url: 'example.com', // 팝업 호출 URL
  rqst_caus_cd: '00',
});
```

> - 원저작자: seungminio
> - 출처: https://github.com/seungminio/okcert.git


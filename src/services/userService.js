const axios = require("axios");
const querystring = require("querystring");
const User = require("../models/User");
require("dotenv").config();

const REST_API_KEY = process.env.REST_API_KEY; // .env 파일에 저장된 키
const REDIRECT_URI = "http://localhost:3001/users/login";

exports.getKakaoUserInfo = async (code) => {
  // 인가 코드로 엑세스 토큰 요청
  const tokenResponse = await axios.post(
    "https://kauth.kakao.com/oauth/token",
    querystring.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );

  // 엑세스 토큰 가져오기
  const accessToken = tokenResponse.data.access_token;

  // 엑세스 토큰으로 사용자 정보 요청
  const userResponse = await axios.get("https://kapi.kakao.com/v2/user/me", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
  });

  // 사용자 정보 추출
  return {
    kakaoId: userResponse.data.id,
    nickname: userResponse.data.properties.nickname,
    profile_image: userResponse.data.properties.profile_image,
    email: userResponse.data.kakao_account.email,
  };
};

exports.findOrCreateUser = async (userInfo) => {
  let user = await User.findOne({ kakaoId: userInfo.kakaoId });

  if (user) {
    return user;
  } else {
    user = new User(userInfo);
    return await user.save();
  }
};

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
    Wrapper,
    Header,
    Logo,
    Infobox,
    Buttonzone,
    MainContainer,
    GlobalStyle,
    Contents,
    ImageText1,
    ImageText2,
    LowText,
    Margin1,
    Margin2,
    SubContainer1,
    SubContainer2,
    SubContainer3,
    Rimage1,
    Rimage2,
    Contents2,
    Contents3,
    Sub,
    Fimg,
    Cimg,
    ImageText3,
  
} from "../styles/autumn";

import facePalette from "../images/4.png"
import summer_face1 from "../images/summer1.png"
import summer_face2 from "../images/summer2.png"
import summer_face3 from "../images/summer3.png"
import spring_face1 from "../images/spring1.png"
import spring_face2 from "../images/spring2.png"
import spring_face3 from "../images/spring3.png"
import autumn_face1 from "../images/autumn1.jpeg"
import autumn_face2 from "../images/autumn2.jpeg"
import autumn_face3 from "../images/autumn3.png"
import winter_face1 from "../images/winter1.png"
import winter_face2 from "../images/winter2.png"
import winter_face3 from "../images/winter3.png"
import palette_spring from "../images/palette_spring.png"
import palette_summer from "../images/palette_summer.png"
import palette_autumn from "../images/palette_autumn.png"
import palette_winter from "../images/palette_winter.png"

import summer_lip1 from "../images/summer_lip1.png"
import summer_lip2 from "../images/summer_lip2.png"
import summer_lip3 from "../images/summer_lip3.png"

// 각 계절에 해당하는 페이지 import
//import Summer from "./summer.jsx";
//import Spring from "./spring.jsx";
//import Autumn from "./autumn.jsx";
//import Winter from "./winter.jsx";
function UserPage() {
    const { userId } = useParams();
    //const navigate = useNavigate();
    const [result, setResult] = useState('');
    const [resultImagePath, setResultImagePath] = useState('');
    const [mediaUrls, setMediaUrls] = useState({ imagePath: "", videoPath: "" });

    
    //const { id } = useParams();
    //const [user, setUser] = useState(null);

    //useEffect(() => {
    //    fetch(`http://192.168.0.75:8080/user/${userId}`)
    //    .then(response => response.json())
    //    //.then(data => setUser(data))
    //    .catch(error => console.error('Error fetching user:', error));
    //}, [userId]);
  
    useEffect(() => {
        axios.get(`http://192.168.0.75:8080/api/user/get_result`, {
            params: { userId }
        })
        .then(response => {
            setResult(response.data.result);
            setResultImagePath(response.data.imagePath.resultImagePath);
        })
        .catch(error => console.error('There was an error!', error));
    }, [userId]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://192.168.0.75:8080/api/photogroup/get_photogroup', {
                    params: { userId }
                });
                setMediaUrls(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [userId]);

    const handleClick1 = () => {
        downloadFile(mediaUrls.imagePath, "jpeg");
        alert(`이미지가 다운로드됩니다.`);
    };

    const handleClick2 = () => {
        downloadFile(mediaUrls.videoPath, "mp4");
        alert(`동영상이 다운로드됩니다.`);
    };


    function downloadFile(url, extension) {
        const now = new Date();
        const minutes = now.getMinutes();  // 올바른 메서드 사용
        const filename = `file_${minutes}.${extension}`;
    
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


    const data = {
        "여름 쿨톤": {
            bgColor: "#F3F8FF",
            InfoBgColor : "#E8EEF7",
            palette: palette_summer,
            celebrities: [summer_face1, summer_face2, summer_face3],
            cosmetics_name1: "3CE - 벨벳 립 틴트",
            cosmetics_name1_num: "#GO NOW",
            cosmetics_name1_img: summer_lip1,
            cosmetics_name2: "페리페라 - 워터베어 틴트",
            cosmetics_name2_num: "25호",
            cosmetics_name2_img: summer_lip2,
            cosmetics_name3: "롬앤 - 쥬시 레스팅 틴트",
            cosmetics_name3_num: "3호",
            cosmetics_name3_img: summer_lip3,
        },
        "봄 웜톤": {
            bgColor: "rgba(240, 180, 179, 0.3)",
            InfoBgColor : "#FFF6F6",
            palette: palette_spring,
            celebrities: [spring_face1, spring_face2, spring_face3],
            cosmetics_name1: "3CE - 벨벳 립 틴트",
            cosmetics_name1_num: "#GO NOW",
            cosmetics_name1_img: summer_lip1,
            cosmetics_name2: "페리페라 - 워터베어 틴트",
            cosmetics_name2_num: "25호",
            cosmetics_name2_img: summer_lip2,
            cosmetics_name3: "롬앤 - 쥬시 레스팅 틴트",
            cosmetics_name3_num: "3호",
            cosmetics_name3_img: summer_lip3,
        },
        "가을 웜톤": {
            bgColor: "#e7e1dc",
            InfoBgColor : "rgba(242, 234, 230, 1)",
            palette: palette_autumn,
            celebrities: [autumn_face1, autumn_face2, autumn_face3],
            cosmetics_name1: "3CE - 벨벳 립 틴트",
            cosmetics_name1_num: "#GO NOW",
            cosmetics_name1_img: summer_lip1,
            cosmetics_name2: "페리페라 - 워터베어 틴트",
            cosmetics_name2_num: "25호",
            cosmetics_name2_img: summer_lip2,
            cosmetics_name3: "롬앤 - 쥬시 레스팅 틴트",
            cosmetics_name3_num: "3호",
            cosmetics_name3_img: summer_lip3,
        },
        "겨울 쿨톤": {
            bgColor: "rgba(132, 126, 193, 0.2)",
            InfoBgColor : "#F5F3FF",
            palette: palette_winter,
            celebrities: [winter_face1, winter_face2, winter_face3],
            cosmetics_name1: "3CE - 벨벳 립 틴트",
            cosmetics_name1_num: "#GO NOW",
            cosmetics_name1_img: summer_lip1,
            cosmetics_name2: "페리페라 - 워터베어 틴트",
            cosmetics_name2_num: "25호",
            cosmetics_name2_img: summer_lip2,
            cosmetics_name3: "롬앤 - 쥬시 레스팅 틴트",
            cosmetics_name3_num: "3호",
            cosmetics_name3_img: summer_lip3,
        },
    };

    const toneData = data[result] || {};

    return (
        <Wrapper bgColor={toneData.bgColor}>
            <Header>
                <Logo>
                    <GlobalStyle />
                    <h1>Color Log</h1></Logo>
                <Infobox bgColor={toneData.InfoBgColor}>
                    ※ QR코드 사진 / 동영상 저장 페이지는 인화 이후 1시간까지 보관 됩니다.
                </Infobox>
                <Buttonzone>                
                    <button onClick={handleClick1}>사진 다운로드</button>
                    <button onClick={handleClick2}>동영상 다운로드</button>
                </Buttonzone>
            </Header>
            <MainContainer> 
                <Contents>
                    <p>당신의 퍼스널 컬러는:</p>
                    <h1>{result}</h1>
                </Contents>
                <Contents>
                    <ImageText1>
                        <div> 
                            <Fimg src={resultImagePath} alt="얼굴 사진" />
                        </div>
                        <div>
                            <h2>Best Color</h2>
                            <Cimg src={toneData.palette} alt="대표 색상 팔레트" />
                        </div>
                    </ImageText1>
                </Contents>
                <Contents>
                    <LowText>face palette</LowText>
                    <ImageText2>
                        <img src={facePalette} alt="추출 팔레트" />
                    </ImageText2>
                </Contents>
                <Contents3>
                    <h3>- 대표 연예인</h3>
                    <ImageText3>
                        {toneData.celebrities && toneData.celebrities.map((celebrity, index) => (
                            <img key={index} src={celebrity} alt={`연예인${index + 1}`} />
                        ))}
                    </ImageText3>
                </Contents3>
            </MainContainer>
            <Margin2></Margin2>
            <Sub>
                <SubContainer1>
                    <h3>화장품 추천</h3>
                    <p>Color log</p>
                </SubContainer1>
                <SubContainer2>
                    <ImageText1>
                        <div>
                            <Contents2>
                                <h1>Summer Mute Items</h1> 
                                <h3>{toneData.cosmetics_name1}</h3>
                                <h3>{toneData.cosmetics_name1_num}</h3>
                            </Contents2>
                        </div>
                        <div>
                            <Rimage1 src={toneData.cosmetics_name1_img} alt="대표 화장품" />
                        </div>
                    </ImageText1>
                </SubContainer2>
                <SubContainer3>
                    <ImageText1>
                        <Margin1>
                            <Rimage2 src={toneData.cosmetics_name2_img} alt="화장품2" />
                        </Margin1>
                        <div>
                            <Margin1>
                                <h3>{toneData.cosmetics_name2}</h3>
                                <h3>{toneData.cosmetics_name2_num}</h3>
                            </Margin1>
                        </div>
                    </ImageText1>
                </SubContainer3>
                <SubContainer3>
                    <ImageText1>
                        <Margin1>
                            <Rimage2 src={toneData.cosmetics_name3_img} alt="화장품3" />
                        </Margin1>
                        <div>
                            <Margin1>
                                <h3>{toneData.cosmetics_name3}</h3>
                                <h3>{toneData.cosmetics_name3_num}</h3>
                            </Margin1>
                        </div>
                    </ImageText1>
                </SubContainer3>
            </Sub>
            <Margin2 />
        </Wrapper>
    );
  
    // 기본적으로 로딩 상태 혹은 결과를 기다리는 메시지를 보여줄 수 있습니다.
    //return (
    //  <div>Loading...</div>
    //);
  }
  
  export default UserPage;
  
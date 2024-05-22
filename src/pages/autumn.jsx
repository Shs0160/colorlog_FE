import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
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
    Margin1,
    ImageText2,
    LowText,
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
import palette1 from "../images/2.png"
import palette2 from "../images/4.png"
import face2 from "../images/6.png"
import face3 from "../images/7.png"
import face4 from "../images/8.png"
import lip1 from "../images/1.jpg"
import lip2 from "../images/9.jpg"


function Autumn() {
    const [mediaUrls, setMediaUrls] = useState({imagePath: "", videoPath: ""});

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(
                    'http://192.168.0.75:8080/api/photogroup/get_photogroup'
                );
                setMediaUrls(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, []);

    const handleClick1 = () => {
        downloadFile(mediaUrls.imagePath, "png");
        alert(`이미지가 다운로드됩니다.`);
    };

    const handleClick2 = () => {
        downloadFile(mediaUrls.videoPath, "mp4");
        alert(`동영상이 다운로드됩니다.`);
    };
    const location = useLocation();
    const facePhoto = location.state.photo;

    const downloadFile = (fileUrl, fileType) => {
        const link = document.createElement('a');
        link.href = fileUrl;

        // 현재 날짜와 시간을 가져오기
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes7()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(4, '0');

        // ColorLog_YYYYMMDDHHMMSS 파일명 생성
        const updatedFileName = `ColorLog_${year}${month}${day}_${hours}${minutes}${seconds}.${fileType}`;

        link.download = updatedFileName;

        link.click();
    };

    return (
        <Wrapper>
            <Header>
                <Logo>
                    <GlobalStyle />
                    <h1>Color Log</h1></Logo>
                <Infobox>
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
                    <h1>가을 웜톤</h1>
                </Contents>
                <Contents>
                    <ImageText1>
                        <div> 
                            <Fimg src={facePhoto} alt="얼굴 사진" />
                        </div>
                        <div>
                            <h2>Best Color</h2>
                            <Cimg src={palette1} alt="대표 색상 팔레트" />
                        </div>
                    </ImageText1>
                </Contents>
                <Contents>
                    <LowText>face palette</LowText>
                    <ImageText2>
                        <img src={palette2} alt="추출 팔레트" />
                    </ImageText2>
                </Contents>
                <Contents3>
                    <h3>- 대표 연예인</h3>
                    <ImageText3>
                        <img src={face2} alt="연예인1" />
                        <img src={face3} alt="연예인2" />
                        <img src={face4} alt="연예인3" />
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
                                <h3>3CE - 벨벳 립 틴트</h3>
                            </Contents2>
                        </div>
                        <div>
                            <Rimage1 src={lip1} alt="대표 화장품" />
                        </div>
                    </ImageText1>
                </SubContainer2>
                <SubContainer3>
                    <ImageText1>
                        <Margin1>
                            <Rimage2 src={lip2} alt="화장품2" />
                        </Margin1>
                        <div>
                            <Margin1>
                                <h3>페리페라 - 워터베어 틴트</h3>
                                <h3>25호</h3>
                            </Margin1>
                        </div>
                    </ImageText1>
                </SubContainer3>
                <SubContainer3>
                    <ImageText1>
                        <Margin1>
                            <Rimage2 src={lip2} alt="화장품3" />
                        </Margin1>
                        <div>
                            <Margin1>
                                <h3>롬앤 - 쥬시 레스팅 틴트</h3>
                                <h3>3호</h3>
                            </Margin1>
                        </div>
                    </ImageText1>
                </SubContainer3>
            </Sub>
            <Margin2 />
        </Wrapper>
    );
}

export default Autumn;

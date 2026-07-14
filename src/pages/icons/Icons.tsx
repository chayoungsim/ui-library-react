import Box from "@/components/Box"
import Icon from "@/components/Icon/Icon"
import usePageTitle from "@/hooks/usePageTitle"

const Icons = () => {
      usePageTitle ('Icons - ui-library')
  return (
    <div>
        <h2>Icons</h2>   
        <div className="sect">
            <h3>설명</h3>
            <Box className="icon-usage">
                <p>
                    <code>Icon</code> 컴포넌트는 <code>text</code>(스크린 리더용 텍스트)와{' '}
                    <code>className</code>(아이콘 종류, <code>icon--*</code>) 두 가지 props를 받습니다.
                    실제 아이콘의 모양·크기·색상은 <code>_icons.scss</code>에 정의된 <code>icon--*</code>{' '}
                    클래스의 mask 이미지로 표현되며, 아래 목록에 있는 클래스명을 그대로 사용하면 됩니다.
                </p>
                <pre className="code-block">
                    <code>{`import Icon from '@/components/Icon/Icon'

// 의미 있는 아이콘: 스크린 리더가 읽을 텍스트를 전달합니다.
<Icon text="다운로드" className="icon--download" />

// 장식용 아이콘: 별도로 읽힐 필요가 없다면 빈 문자열을 전달합니다.
<Icon text="" className="icon--search" />`}</code>
                </pre>
                <ul className="icon-usage-props">
                    <li>
                        <code>text</code> (필수) — 스크린 리더용 텍스트입니다. 장식용 아이콘이면 빈 문자열(
                        <code>""</code>)을 전달하세요.
                    </li>
                    <li>
                        <code>className</code> (필수) — <code>icon--이름</code> 형태의 아이콘 종류
                        클래스입니다. 아래 목록에서 사용 가능한 이름을 확인할 수 있습니다.
                    </li>
                </ul>
            </Box>
        </div>
        <div className="sect">
            <h3>Basic Icon</h3>     
            <ul className="icon-lists">
                <li>
                    <div className="bx"><Icon text="download" className="icon--download" /></div>
                    <div className="tx">download</div>
                </li>
                <li>
                    <div className="bx"><Icon text="box-arrow-right" className="icon--box-arrow-right" /></div>
                    <div className="tx">box-arrow-right</div>
                </li>
                <li>
                    <div className="bx"><Icon text="box-arrow-up-right" className="icon--box-arrow-up-right" /></div>
                    <div className="tx">box-arrow-up-right</div>
                </li>
                <li>
                    <div className="bx"><Icon text="clip" className="icon--clip" /></div>
                    <div className="tx">clip</div>
                </li>
                <li>
                    <div className="bx"><Icon text="clip-square" className="icon--clip-square" /></div>
                    <div className="tx">clip-square</div>
                </li>
                <li>
                    <div className="bx"><Icon text="question-circle" className="icon--question-circle" /></div>
                    <div className="tx">question-circle</div>
                </li>
                <li>
                    <div className="bx"><Icon text="exc-circle" className="icon--exc-circle" /></div>
                    <div className="tx">exc-circle</div>
                </li>
                <li>
                    <div className="bx"><Icon text="info-circle" className="icon--info-circle" /></div>
                    <div className="tx">info-circle</div>
                </li>
                <li>
                    <div className="bx"><Icon text="info-circle-fill" className="icon--info-circle-fill" /></div>
                    <div className="tx">info-circle-fill</div>
                </li>
                <li>
                    <div className="bx"><Icon text="check" className="icon--check" /></div>
                    <div className="tx">check</div>
                </li>
                <li>
                    <div className="bx"><Icon text="check-circle" className="icon--check-circle" /></div>
                    <div className="tx">check-circle</div>
                </li>
                <li>
                    <div className="bx"><Icon text="eye" className="icon--eye" /></div>
                    <div className="tx">eye</div>
                </li>
                <li>
                    <div className="bx"><Icon text="link-45deg" className="icon--link-45deg" /></div>
                    <div className="tx">link-45deg</div>
                </li>
                <li>
                    <div className="bx"><Icon text="search" className="icon--search" /></div>
                    <div className="tx">search</div>
                </li>
                <li>
                    <div className="bx"><Icon text="share" className="icon--share" /></div>
                    <div className="tx">share</div>
                </li>
                <li>
                    <div className="bx"><Icon text="refresh" className="icon--refresh" /></div>
                    <div className="tx">refresh</div>
                </li>
                <li>
                    <div className="bx"><Icon text="pen" className="icon--pen" /></div>
                    <div className="tx">pen</div>
                </li>
                <li>
                    <div className="bx"><Icon text="pen-square" className="icon--pen-square" /></div>
                    <div className="tx">pen-square</div>
                </li>
                <li>
                    <div className="bx"><Icon text="calendar" className="icon--calendar" /></div>
                    <div className="tx">calendar</div>
                </li>
                <li>
                    <div className="bx"><Icon text="print" className="icon--print" /></div>
                    <div className="tx">print</div>
                </li>
                <li>
                    <div className="bx"><Icon text="geo-alt" className="icon--geo-alt" /></div>
                    <div className="tx">geo-alt</div>
                </li>
                <li>
                    <div className="bx"><Icon text="telephone" className="icon--telephone" /></div>
                    <div className="tx">telephone</div>
                </li>
                <li>
                    <div className="bx"><Icon text="envelope" className="icon--envelope" /></div>
                    <div className="tx">envelope</div>
                </li>
                <li>
                    <div className="bx"><Icon text="house" className="icon--house" /></div>
                    <div className="tx">house</div>
                </li>
                <li>
                    <div className="bx"><Icon text="globe" className="icon--globe" /></div>
                    <div className="tx">globe</div>
                </li>
                <li>
                    <div className="bx"><Icon text="bell" className="icon--bell" /></div>
                    <div className="tx">bell</div>
                </li>
                <li>
                    <div className="bx"><Icon text="bag" className="icon--bag" /></div>
                    <div className="tx">bag</div>
                </li>
                <li>
                    <div className="bx"><Icon text="bus-front" className="icon--bus-front" /></div>
                    <div className="tx">bus-front</div>
                </li>
                <li>
                    <div className="bx"><Icon text="train-front" className="icon--train-front" /></div>
                    <div className="tx">train-front</div>
                </li>
                <li>
                    <div className="bx"><Icon text="car-front" className="icon--car-front" /></div>
                    <div className="tx">car-front</div>
                </li>
                <li>
                    <div className="bx"><Icon text="person" className="icon--person" /></div>
                    <div className="tx">person</div>
                </li>
                <li>
                    <div className="bx"><Icon text="clock" className="icon--clock" /></div>
                    <div className="tx">clock</div>
                </li>
                <li>
                    <div className="bx"><Icon text="hamber-bar" className="icon--hamber-bar" /></div>
                    <div className="tx">hamber-bar</div>
                </li>
                <li>
                    <div className="bx"><Icon text="message-dots" className="icon--message-dots" /></div>
                    <div className="tx">message-dots</div>
                </li>
            </ul>
        </div>

        <div className="sect">
            <h3>Control Icon</h3>
            <ul className="icon-lists">
                <li>
                    <div className="bx"><Icon text="minus" className="icon--minus" /></div>
                    <div className="tx">minus</div>
                </li>
                <li>
                    <div className="bx"><Icon text="plus" className="icon--plus" /></div>
                    <div className="tx">plus</div>
                </li>
                <li>
                    <div className="bx"><Icon text="x" className="icon--x" /></div>
                    <div className="tx">x</div>
                </li>
                <li>
                    <div className="bx"><Icon text="x-lg" className="icon--x-lg" /></div>
                    <div className="tx">x-lg</div>
                </li>
                <li>
                    <div className="bx"><Icon text="pause" className="icon--pause" /></div>
                    <div className="tx">pause</div>
                </li>
                <li>
                    <div className="bx"><Icon text="play" className="icon--play" /></div>
                    <div className="tx">play</div>
                </li>
                <li>
                    <div className="bx"><Icon text="play-fill" className="icon--play-fill" /></div>
                    <div className="tx">play-fill</div>
                </li>
                <li>
                    <div className="bx"><Icon text="play-fill-up" className="icon--play-fill-up" /></div>
                    <div className="tx">play-fill-up</div>
                </li>
                <li>
                    <div className="bx"><Icon text="play-fill-down" className="icon--play-fill-down" /></div>
                    <div className="tx">play-fill-down</div>
                </li>
            </ul>
        </div>
        <div className="sect">
            <h3>SNS Icon</h3>
            <ul className="icon-lists">
                <li>
                    <div className="bx"><Icon text="facebook" className="icon--facebook" /></div>
                    <div className="tx">facebook</div>
                </li>
                <li>
                    <div className="bx"><Icon text="instagram" className="icon--instagram" /></div>
                    <div className="tx">instagram</div>
                </li>
                <li>
                    <div className="bx"><Icon text="youtube" className="icon--youtube" /></div>
                    <div className="tx">youtube</div>
                </li>
                <li>
                    <div className="bx"><Icon text="twitter" className="icon--twitter" /></div>
                    <div className="tx">twitter</div>
                </li>
                <li>
                    <div className="bx"><Icon text="kakao" className="icon--kakao" /></div>
                    <div className="tx">kakao</div>
                </li>
                <li>
                    <div className="bx"><Icon text="naver" className="icon--naver" /></div>
                    <div className="tx">naver</div>
                </li>
                <li>
                    <div className="bx"><Icon text="blog" className="icon--blog" /></div>
                    <div className="tx">blog</div>
                </li>
                <li>
                    <div className="bx"><Icon text="apple" className="icon--apple" /></div>
                    <div className="tx">apple</div>
                </li>
                <li>
                    <div className="bx"><Icon text="band" className="icon--band" /></div>
                    <div className="tx">band</div>
                </li>
                <li>
                    <div className="bx"><Icon text="pinterest" className="icon--pinterest" /></div>
                    <div className="tx">pinterest</div>
                </li>
                <li>
                    <div className="bx"><Icon text="linkedin" className="icon--linkedin" /></div>
                    <div className="tx">linkedin</div>
                </li>
                <li>
                    <div className="bx"><Icon text="tiktok" className="icon--tiktok" /></div>
                    <div className="tx">tiktok</div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Icons

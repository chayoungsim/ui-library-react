import Input from "@/components/Input"
import InputFile from "@/components/Input/InputFile"

const InputPage = () => {
  return (
    <div>
      <h2>Input</h2>
      <ul className="input-lists">
        <li>
          <h3>text</h3>
          <Input type="text" placeholder="이름을 입력하세요" />
        </li>
        <li>
          <h3>password</h3>
          <Input type="password" placeholder="비밀번호를 입력하세요" />
        </li>
        <li>
          <h3>email</h3>
          <Input type="email" placeholder="이메일 주소를 입력하세요" />
        </li>
        <li>
          <h3>number</h3>
          <Input type="number" placeholder="숫자를 입력하세요" />
        </li>
        <li>
          <h3>tel</h3>
          <Input type="tel" placeholder="전화번호를 입력하세요" />
        </li>
        <li>
          <h3>search</h3>
          <Input type="search" placeholder="검색어를 입력하세요" />
        </li>
        <li>
          <h3>date</h3>
          <Input type="date" placeholder="날짜를 입력하세요" />
        </li>
        <li>
          <h3>color</h3>
          <Input type="color" placeholder="색상선택" />
        </li>
        <li>
          <h3>range</h3>
          <Input type="range" placeholder="슬라이더 입력" />
        </li>
        <li>
          <h3>file</h3>
          <Input type="file" placeholder="파일업로드" />
        </li>
        <li>
          <h3>file-design</h3>
          <InputFile />
        </li>
        <li>
          <h3>disabled</h3>
          <Input type="text" placeholder="이름을 입력하세요" disabled />
        </li>
        <li>
          <h3>error</h3>
          <Input type="text" placeholder="이름을 입력하세요" error />
        </li>
      </ul>
    </div>
  )
}

export default InputPage

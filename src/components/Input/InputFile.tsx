import { useRef, useState, type ChangeEvent } from "react"
import Input from "@/components/Input"
import Button from "@/components/Button"
import Icon from "@/components/Icon/Icon"
import './InputFile.scss'

const InputFile = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState('')

  const handleAddClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    setFileName(file ? file.name : '')
  }

  const handleRemoveClick = () => {
    setFileName('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className="input--file">
        <div className="input--file-wp">
          <Input type="text" title="첨부파일" placeholder="파일을 선택하세요" value={fileName} readOnly />
          {fileName && (
            <Button iconOnly variant="text" size="sm" aria-label="첨부파일삭제" onClick={handleRemoveClick}>
                <Icon text="삭제" className="icon--x" />
            </Button>
          )}
        </div>
        <Button type="button" onClick={handleAddClick}>첨부파일추가</Button>
        <Input
          ref={fileInputRef}
          type="file"
          className="real-input-file"
          onChange={handleFileChange}
        />
    </div>
  )
}

export default InputFile
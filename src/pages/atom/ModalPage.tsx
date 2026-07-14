import { useState } from 'react'
import Modal from '@/components/Modal'
import Button from '@/components/Button'
import Box from '@/components/Box/Box'

const ModalPage = () => {
  const [isDefaultOpen, setIsDefaultOpen] = useState(false)
  const [isSmOpen, setIsSmOpen] = useState(false)
  const [isLgOpen, setIsLgOpen] = useState(false)
  const [isPersistentOpen, setIsPersistentOpen] = useState(false)

  return (
    <div>
        <h2>Modal</h2>
        <div className="sect">
            <h3>기본</h3>
            <Box className="flex-center">
                <Button onClick={() => setIsDefaultOpen(true)} variant = 'outline'>모달 열기</Button>
            </Box>
            <Modal isOpen={isDefaultOpen} onClose={() => setIsDefaultOpen(false)} title="기본 모달">
                <p>모달 내용입니다.</p>
            </Modal>

            <h3>size</h3>
            <Box className="flex-center">
                <Button onClick={() => setIsSmOpen(true)} variant = 'outline'>Small</Button>
                <Button onClick={() => setIsLgOpen(true)} variant = 'outline'>Large</Button>
            </Box>
            <Modal isOpen={isSmOpen} onClose={() => setIsSmOpen(false)} size="sm" title="Small 모달">
                <p>작은 모달입니다.</p>
            </Modal>
            <Modal isOpen={isLgOpen} onClose={() => setIsLgOpen(false)} size="lg" title="Large 모달">
                <p>큰 모달입니다.</p>
            </Modal>

            <h3>배경 클릭으로 닫히지 않음</h3>
            <Box className="flex-center">
                <Button onClick={() => setIsPersistentOpen(true)} variant = 'outline'>모달 열기</Button>
            </Box>
            <Modal
                isOpen={isPersistentOpen}
                onClose={() => setIsPersistentOpen(false)}
                closeOnBackdropClick={false}
                title="닫기 버튼으로만 닫힘"
            >
                <p>배경을 클릭해도 닫히지 않습니다. 닫기 버튼이나 ESC 키로만 닫을 수 있습니다.</p>
            </Modal>
        </div>
    </div>
  )
}

export default ModalPage

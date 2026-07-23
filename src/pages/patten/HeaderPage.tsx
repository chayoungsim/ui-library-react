import HeaderTy1 from '@/components/Layout/HeaderTy1'
import HeaderTy2 from '@/components/Layout/HeaderTy2'
import HeaderTy3 from '@/components/Layout/HeaderTy3'
import Box from '@/components/Box/Box'

const HeaderPage = () => {
  return (
    <div style={{height: "300vh"}}>
        <h2>Patten</h2>
        <div className="sect">
            <h3>Header</h3>
            <Box style={{position:"relative"}}>
                <HeaderTy1 />
                
            </Box>
            <h3>Header - hasSubmenu</h3>
            <Box style={{padding:"0"}}>
                <HeaderTy2 />
            </Box>
            <h3>Header - hasSubmenu</h3>
            <Box>
                <HeaderTy3 />
            </Box>
        </div>
    </div>
  )
}

export default HeaderPage
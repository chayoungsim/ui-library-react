import Table from '@/components/Table'
import Box from '@/components/Box/Box'

const rows = [
  { id: 1, name: '김민준', role: '프런트엔드' },
  { id: 2, name: '이서연', role: '백엔드' },
  { id: 3, name: '박도윤', role: '디자이너' },
]

const TablePage = () => {
  return (
    <div>
        <h2>Table</h2>
        <div className="sect">
            <h3>default</h3>
            <Box>
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>이름</th>
                            <th>담당</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>

            <h3>striped</h3>
            <Box>
                <Table variant="striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>이름</th>
                            <th>담당</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>

            <h3>bordered</h3>
            <Box>
                <Table variant="bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>이름</th>
                            <th>담당</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>

            <h3>ty1</h3>
            <Box>
                <Table variant="ty1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>이름</th>
                            <th>담당</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>

            <h3>ty2</h3>
            <Box>
                <Table variant="ty2">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>이름</th>
                            <th>담당</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>

            <h3>size</h3>
            <Box>
                <Table size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>이름</th>
                            <th>담당</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>
            <Box>
                <Table size="lg">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>이름</th>
                            <th>담당</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((row) => (
                            <tr key={row.id}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Box>
        </div>
    </div>
  )
}

export default TablePage

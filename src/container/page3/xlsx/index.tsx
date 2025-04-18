import React, { Component } from 'react'
import { Button } from 'antd'
import './style.less'
import XLSX from 'xlsx'


interface IMyXlsx {
    [key: string]: any;
}

// const MyXlsx: IMyXlsx = () => {

//     return null;
// }

export default class myXlsx extends Component {

    state = {
        data: {
            header: ['A', 'B', 'C', 'D', 'E'],
            data: [
                { A: 1, B: 2, C: 3, D: 4, E: 5 },
                { A: 11, B: 22, C: 33, D: 44, E: 55 },
                { A: 111, B: 222, C: 333, D: 444, E: 555 },
                { A: 1111, B: 2222, C: 3333, D: 4444, E: 5555 },
                { A: 11111, B: 22222, C: 33333, D: 44444, E: 55555 }
            ]
        },
        workbook: {}
    }

    componentDidMount() {
        const { data } = this.state;
        var workbook = XLSX.utils.book_new();

        //新建一个sheet
        var ws = XLSX.utils.json_to_sheet(data.data, {
            header: data.header
        })

        XLSX.utils.book_append_sheet(workbook, ws, 'sheet1')
        this.setState({
            workbook: workbook
        })

    }

    handleFile = () => {
        XLSX.writeFile(this.state.workbook, 'out.xlsm');
    }

    render() {
        return (
            <div className="myxlsx">
                <Button>读取xlsx</Button>
                <Button onClick={() => this.handleFile()}>下载xlsx</Button>
            </div>
        )
    }
}

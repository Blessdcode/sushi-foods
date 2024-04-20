import React, { useContext, useRef } from 'react'
import { ShopContext } from '../context/shopContext'


import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'



const Receipt = () => {
    const pdfRef = useRef()
    const downloadPDF = () => {
        const input = pdfRef.current
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png')
            const pdf = new jsPDF('p', 'mm', 'a4', true)
            const pdfWidth = pdf.internal.pageSize.getWidth()
            const pdfHeight = pdf.internal.pageSize.getHeight()
            const imgWidth = canvas.width
            const imgHeight = canvas.height
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
            const imgX = (pdfWidth - imgWidth * ratio) / 2
            const imgY = 30
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio)
            pdf.save('receipt.pdf')
        })
    }

    return (
        <div className="receipt"
            style={{

                margin: '3rem auto',
                width: '1300px'
            }}
        >
            <div className="pdf " ref={pdfRef}>
                <div className='top-cart'

                >
                    <div>
                        <div className="cart-det"
                            style={{
                                padding: '1rem 1rem',
                                fontSize: '32px',
                                // display: 'flex'
                            }}

                        >
                            <div class="cart-det-box"
                                style={{
                                    margin: '3rem 0',
                                    color: 'hsl(0, 0%, 95%)',
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    borderRadius: '8px',
                                    padding: '1rem 1rem',


                                }}
                            >
                                <img src="" alt="" class="cart-img" />
                                <div class="food-name">
                                    <h4>Dounut Sus</h4>
                                    <p>$ 200</p>
                                </div>
                            </div>
                            <div class="cart-det-box"
                                style={{
                                    margin: '3rem 0',
                                    color: 'hsl(0, 0%, 95%)',
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    borderRadius: '8px',
                                    padding: '1rem 1rem',


                                }}
                            >
                                <img src="" alt="" class="cart-img" />
                                <div class="food-name">
                                    <h4>Recoi Nav</h4>
                                    <p>$ 300</p>
                                </div>
                            </div>
                            <div class="cart-det-box"
                                style={{
                                    margin: '3rem 0',
                                    color: 'hsl(0, 0%, 95%)',
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    borderRadius: '8px',
                                    padding: '1rem 1rem',


                                }}
                            >
                                <img src="" alt="" class="cart-img" />
                                <div class="food-name">
                                    <h4>Sishi Avo</h4>
                                    <p>$ 500</p>
                                </div>
                            </div>
                        </div>


                    </div>
                    <h3>Total:$1000 </h3>
                </div>
            </div>
            <button
                className="to-cart"
                onClick={downloadPDF}
                style={{
                    color: 'hsl(0, 0%, 95%)',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    borderRadius: '8px',
                    fontSize: '24px',
                    padding: '.54rem 1rem',
                    marginTop: '10px'
                }}
            >
                Download
            </button>
        </div>
    )
}

export default Receipt

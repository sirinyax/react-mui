// import Doc from '../../testexportfile/example_document.docx';

// import React, { useState } from 'react';
// import PizZip from 'pizzip';
// import Docxtemplater from 'docxtemplater';
// import { saveAs } from 'file-saver';
// import * as mammoth from 'mammoth';

// const TemplateForm: React.FC = () => {
//   const [formData, setFormData] = useState({
//     company_name: '',
//     address: '',
//     report_date: '',
//     period: '',
//   });
//   const [previewContent, setPreviewContent] = useState<string | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const blob = await loadTemplateAndGenerateDocument(formData);
//     if (blob) {
//       generatePreview(blob);
//     }
//   };


//   const loadTemplateAndGenerateDocument = async (
//         data: { 
//         company_name: string; 
//         address: string;
//         report_date: string;
//         period: string;
//     }) => {
//     try {
//       // โหลดไฟล์ template.docx
//       const response = await fetch('/template/form_CFO.docx'); // ใส่พาธของไฟล์ template
//       const templateArrayBuffer = await response.arrayBuffer();

//       // สร้าง zip object จาก template
//       const zip = new PizZip(templateArrayBuffer);
//       const doc = new Docxtemplater(zip, {
//         paragraphLoop: true,
//         linebreaks: true,
//       });

//       // แทนที่ข้อมูลใน template
//       doc.setData(data);
//       doc.render();

//       // สร้างไฟล์ blob ใหม่
//       const blob = doc.getZip().generate({
//         type: 'blob',
//         mimeType:
//           'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
//       });
//       return blob;
//     } catch (error) {
//       console.error('Error generating document:', error);
//       return null;
//     }
//   };

//   const generatePreview = async (blob: Blob) => {
//     const arrayBuffer = await blob.arrayBuffer();
//     const result = await mammoth.convertToHtml({ arrayBuffer });
//     setPreviewContent(result.value); // กำหนด HTML ที่แปลงแล้วไปแสดงใน preview
//   };

//   const handleDownload = async () => {
//     const blob = await loadTemplateAndGenerateDocument(formData);
//     if (blob) {
//       saveAs(blob, 'GeneratedDocument.docx');
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>company name:</label>
//           <input
//             type="text"
//             name="company_name"
//             value={formData.company_name}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>address:</label>
//           <input
//             type="text"
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>report_date:</label>
//           <input
//             type="text"
//             name="report_date"
//             value={formData.report_date}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label>period:</label>
//           <input
//             type="text"
//             name="period"
//             value={formData.period}
//             onChange={handleChange}
//           />
//         </div>
//         <button type="submit">Generate Preview</button>
//       </form>

//       {/* แสดง Preview ของไฟล์ .docx ที่แปลงเป็น HTML */}
//       {previewContent && (
//         <div>
//           <h3>Document Preview:</h3>
//           <div
//             dangerouslySetInnerHTML={{ __html: previewContent }}
//             style={{
//               border: '1px solid #ccc',
//               padding: '10px',
//               marginTop: '10px',
//               maxHeight: '300px',
//               overflowY: 'auto',
//             }}
//           />
//           <button onClick={handleDownload}>Download Document</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TemplateForm;


import React, { useEffect, useState } from 'react';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { saveAs } from 'file-saver';
import mammoth from 'mammoth';
// import ImageModule from 'docxtemplater-image-module-free';

interface Data {
  company_name: string;
  company_image: string;
  address: string;
  report_date: string; 
  period: string;
  person_name: string;
}

const DocumentGenerator: React.FC = () => {
    const [data, setData] = useState<Data | null>(null);
    const [previewHtml, setPreviewHtml] = useState<string | null>(null);
  
    useEffect(() => {
      // ดึงข้อมูลจาก API รวมถึง URL รูปภาพ
      fetch('http://localhost:4001/companies', )
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);
  
    // ฟังก์ชันสำหรับแปลง URL ของภาพเป็น Base64
    const fetchImageAsBase64 = async (url: string): Promise<string> => {
      const response = await fetch(url);
      const blob = await response.blob();
      return new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    };
  
    const generateDocument = async () => {
      if (!data) return;
  
      // โหลดไฟล์ .docx template
      const response = await fetch('/template/form_CFO.docx');
      const arrayBuffer = await response.arrayBuffer();
      const zip = new PizZip(arrayBuffer);
  
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });
  
      // ดึงภาพจาก URL แล้วแปลงเป็น Base64
      const imageBase64 = await fetchImageAsBase64(data.company_image);
  
      // ตั้งค่าข้อมูลรวมถึง Base64 ของภาพ
      doc.setData({
        company_name: data.company_name,
        company_image: imageBase64,
        address: data.address,
        report_date: data.report_date,
        period: data.period,
        person_name: data.person_name
      });
  
      try {
        doc.render();
        const output = doc.getZip().generate({ type: 'arraybuffer' });
  
        // แปลงไฟล์ .docx เป็น HTML เพื่อแสดงเป็น Preview
        const { value: html } = await mammoth.convertToHtml({ arrayBuffer: output });
        setPreviewHtml(html);
  
        // ดาวน์โหลดไฟล์ที่เสร็จแล้ว
        const blob = new Blob([output], {
          type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        });
        saveAs(blob, 'output.docx');
      } catch (error) {
        console.error('Error rendering document:', error);
      }
    };
  
    return (
      <div className='container'>
        <button onClick={generateDocument}>Generate and Preview Document</button>
  
        {/* แสดงผล Preview HTML ที่ได้จากการแปลง */}
        {previewHtml && (
          <div
            dangerouslySetInnerHTML={{ __html: previewHtml }}
            style={{ border: '1px solid #ddd', padding: '10px', marginTop: '20px' }}
          />
        )}
  
        {/* ปุ่มดาวน์โหลด */}
        {previewHtml && (
          <button onClick={() => saveAs(new Blob([previewHtml]), 'output.docx')}>
            Download Document
          </button>
        )}
      </div>
    );
};

export default DocumentGenerator;


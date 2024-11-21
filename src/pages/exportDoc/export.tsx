import React, { useEffect, useState } from 'react';
import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import { saveAs } from 'file-saver';
import mammoth from 'mammoth';
import { CompanyData } from './type';
import { ExampleDataTable } from './data/Table';
import { ExampleCompanyData } from './data/CompanyData';
import { formattedItems } from './data/listNumber';

const DocumentGenerator: React.FC = () => {
    const [data, setData] = useState<CompanyData | null>(ExampleCompanyData);
    const [previewHtml, setPreviewHtml] = useState<string | null>(null);
    const [generatedDoc, setGeneratedDoc] = useState<ArrayBuffer | null>(null);
  
    const generateDocument = async () => {
      if (!data) return;

     
  
      const response = await fetch('/template/form_CFO.docx');
      const arrayBuffer = await response.arrayBuffer();
      const zip = new PizZip(arrayBuffer);
  
      const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
      });

      doc.setData({
        company_name: data.company_name,
        company_image: data.company_image,
        address: data.address,
        report_date:data.report_date,
        period: data.period,
        person_name: data.person_name,
        verifier: data.verifier,
        prepared_by: data.prepared_by,
        company_facility_not_calculate: data.company_facility_not_calculate,
        dataTable: ExampleDataTable,
        listItemFormatted: formattedItems,
      });
  
      try {
        doc.render();
        const output = doc.getZip().generate({ type: 'arraybuffer' });
  
        const { value: html } = await mammoth.convertToHtml({ arrayBuffer: output });
        setPreviewHtml(html);
        setGeneratedDoc(output);
  
      } catch (error) {
        console.error('Error rendering document:', error);
      }
    };

    const downloadDocument = () => {
      if (generatedDoc) {
        const blob = new Blob([generatedDoc], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        saveAs(blob, 'generated_document.docx');
      }
    };
  
    return (
      <div className='container'>
        <button onClick={generateDocument}>Generate and Preview Document</button>
  
        {previewHtml && (
          <div
            dangerouslySetInnerHTML={{ __html: previewHtml }}
            style={{ border: '1px solid #ddd', padding: '10px', marginTop: '20px' }}
          />
        )}

        <div>
          <button className="btn btn-primary"  onClick={downloadDocument}>Download</button>
        </div>

      </div>
    );
};

export default DocumentGenerator;

// const blob = new Blob([output], {
//   type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
// });
// saveAs(blob, 'output.docx');
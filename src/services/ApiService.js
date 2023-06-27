import axios from "axios";

export const AddCollege = async (payload) => {
  const res = await axios.post("/api/college/createcollegerecord", payload);
  return res;
};


export const getallcollegesrecords  = async () => {
  const res = await axios.get("/api/college/getallcollegesrecords");
  return res;
};


export const getcollegerecord  = async () => {
  const res = await axios.get("/api/college/getcollegerecord");
  return res;
};


export const updatecollegerecord  = async () => {
  const res = await axios.update(" /api/college/updatecollegerecord");
  return res;
};


export const deletecollegerecord  = async () => {
  const res = await axios.delete(" /api/college/deletecollegerecord");
  return res;
};


// export const generateSignature = async (name) => {
//   const res = await axios.get(`/api/v1/signature/generateimage?name=${name}`);
//   return res;
// };

// export const getPdfFile = async (accessCode) => {
//   const res = await axios.get(
//     `/api/v1/signature/download?accessCode=${accessCode}`,
//     {
//       responseType: "blob",
//     }
//   );
//   return res;
// };

// export const uploadSignedPdfFile = async (payload) => {
//   const res = await axios.post("/api/v1/signature/uploadsigned", payload);
//   return res;
// };

// export const downloadSignedPdfFile = async (accessCode) => {
//   const res = await axios.get(
//     `/api/v1/signature/downloadsigned?accessCode=${accessCode}`,
//     {
//       responseType: "blob",
//     }
//   );
//   return res;
// };

// export const getSignedDocumentsList = async () => {
//   const res = await axios.get("/api/v1/signature/list");
//   return res;
// };

// export const setStatusToDocumentListItem = async (accessCode, status) => {
//   const res = await axios.get(
//     `/api/v1/signature/approve?accessCode=${accessCode}&status=${status}`
//   );
//   return res;
// };

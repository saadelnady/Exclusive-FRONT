import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { MdBlock } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

export const productStatus = {
  PENDING: "PENDING",
  ACCEPTED: "ACCEPTED",
  BLOCKED: "BLOCKED",
};

// ===============================================
export const productAcceptAction = {
  type: { AR: "موافقة", EN: "Accept" },
  message: {
    AR: "هل تود الموافقة على هذا المنتج ؟",
    EN: "Are you sure to Accept this product ?",
  },
  Icon: <AiOutlineCheckCircle />,
};
// ===============================================

export const productBlockAction = {
  type: { AR: "حجب", EN: "Block" },
  message: {
    AR: "هل تود حجب هذا المنتج ؟",
    EN: "Are you sure to Block this product ?",
  },
  Icon: <MdBlock />,
};
// ===============================================

export const productUnBlockAction = {
  type: { AR: "أزالة الحجب", EN: "UnBlock" },
  message: {
    AR: "هل تود أزالة الحجب عن هذا المنتج ؟",
    EN: "Are you sure to UnBlock this product ?",
  },
  Icon: <MdBlock />,
};
// ===============================================
export const productDeleteAction = {
  type: { AR: "حذف", EN: "Delete" },
  message: {
    AR: "هل تود حذف هذا المنتج ؟",
    EN: "Are you sure to Delete this product ?",
  },
  Icon: <RiDeleteBin6Line />,
};
// ===============================================

export const productViewAction = {
  type: { AR: "عرض المنتج", EN: "View Product" },
  Icon: <FaEye />,
};
// ===============================================

export const categoryDeleteAction = {
  type: { AR: "حذف", EN: "Delete" },
  message: {
    AR: "هل تود حذف هذا التصنيف ؟",
    EN: "Are you sure to Delete this category ?",
  },
  subMessage: {
    AR: "سوف تقوم بحذف جميع المنتجات الخاصة بعذا التصنيف ؟",
    EN: "You will delete every products related to this category too",
  },
  Icon: <RiDeleteBin6Line />,
};
// ===============================================

export const subCategoryDeleteAction = {
  type: { AR: "حذف", EN: "Delete" },
  message: {
    AR: "هل تود حذف هذا التصنيف الفرعى؟",
    EN: "Are you sure to Delete this subCategory ?",
  },
  subMessage: {
    AR: "سوف تقوم بحذف جميع المنتجات الخاصة بعذا التصنيف ؟",
    EN: "You will delete every products related to this subCategory too",
  },
  Icon: <RiDeleteBin6Line />,
};

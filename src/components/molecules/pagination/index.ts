// import {useState} from 'https://cdn.skypack.dev/react@17.0.1';
// import Pagination from 'https://cdn.skypack.dev/rc-pagination@3.1.15';

// const App = () => {
//   const [perPage, setPerPage] = useState(10);
//   const [size, setSize] = useState(perPage);
//   const [current, setCurrent] = useState(1);

//   const PerPageChange = value => {
//     setSize(value);
//     const newPerPage = Math.ceil(datatableUsers.length / value);
//     if (current > newPerPage) {
//       setCurrent(newPerPage);
//     }
//   };

//   const getData = (current, pageSize) => {
//     // Normally you should get the data from the server
//     return datatableUsers.slice((current - 1) * pageSize, current * pageSize);
//   };

//   const PaginationChange = (page, pageSize) => {
//     setCurrent(page);
//     setSize(pageSize);
//   };

//   const PrevNextArrow = (current, type, originalElement) => {
//     if (type === 'prev') {
//       return (
//         <button>
//           <i className="fa fa-angle-double-left"></i>
//         </button>
//       );
//     }
//     if (type === 'next') {
//       return (
//         <button>
//           <i className="fa fa-angle-double-right"></i>
//         </button>
//       );
//     }
//     return originalElement;
//   };

//   return (
//     <Pagination
//       className="pagination-data"
//       showTotal={(total, range) =>
//         `Showing ${range[0]}-${range[1]} of ${total}`
//       }
//       onChange={PaginationChange}
//       total={datatableUsers.length}
//       current={current}
//       pageSize={size}
//       showSizeChanger={false}
//       itemRender={PrevNextArrow}
//       onShowSizeChange={PerPageChange}
//     />
//   );
// };

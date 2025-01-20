import Swal from 'sweetalert2';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Typography } from '@mui/material';
import usePixel from './usePixel';
import useAxiosPublic from '../../Axios/useAxiosPublic';


const PixelCodes = () => {
  const [pixelData,refetch] = usePixel();
  const AxiosPublic = useAxiosPublic();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this pixel code!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it",
    }).then((result) => {
      if (result.isConfirmed) {
        AxiosPublic.delete(`/pixel/${id}`).then((res) => { 
          if (res.data.deletedCount > 0) {
            refetch()
            // Refresh the pixel codes list after deletion
            Swal.fire({
              title: "Deleted!",
              text: "The pixel code has been deleted.",
              icon: "success",
            });
          } else {
            Swal.fire({
              title: "Error!",
              text: "Failed to delete the pixel code.",
              icon: "error",
            });
          }
        }).catch((error) => {
          console.error('Error deleting pixel code:', error);
          Swal.fire({
            title: "Error!",
            text: "An error occurred while deleting the pixel code.",
            icon: "error",
          });
        });
      }
    });
  };

  const handlePixelSubmit = (e) => {
    e.preventDefault();
    const data=e.target.pixelCode.value
    const datas={
        pixelId:data,
        date:new Date()

    }

    AxiosPublic.post("/pixel", datas).then((res) => {
        console.log(res.data);
        refetch()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logo has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (

      <div>
            <div className="my-5 container mx-auto bg-white py-5 px-5 rounded-lg">
    <h2 className="text-xl font-bold mb-4">Add Meta Pixel Code</h2>
    <form onSubmit={handlePixelSubmit}>
      <div className="mb-4">
        <label htmlFor="pixelCode" className="block text-sm font-medium text-gray-700">
          Meta Pixel Code
        </label>
        <input
          type="text"
          id="pixelCode"
          name="code"
          placeholder="Enter your Meta Pixel Code"
          className="mt-1 block text-black bg-white w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          required
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        Submit Pixel Code
      </button>
    </form>
    </div>
    <div className='mx-auto container' >
      <Typography variant="h4" gutterBottom align="center">Pixel Codes</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Pixel ID</strong></TableCell>
              <TableCell align="right"><strong>Actions</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pixelData.map((pixel) => (
              <TableRow key={pixel.id}>
                <TableCell>{pixel.pixelId}</TableCell>
                <TableCell align="right">
                  <Button 
                    variant="contained" 
                    color="error" 
                    onClick={() => handleDelete(pixel._id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
      </div>
  );
};

export default PixelCodes;

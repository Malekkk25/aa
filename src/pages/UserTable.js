import { Grid } from "@mui/material";
import UsersPerformance from "../components/dashboard/UsersPerformance";
import FullLayout from "../components/layouts/FullLayout";

const UserTable = () => {
  return (<div>
    
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <UsersPerformance/>
      </Grid>
    </Grid>
   
    </div>
  );
};

export default UserTable;

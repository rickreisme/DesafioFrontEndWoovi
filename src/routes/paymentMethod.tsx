import { Box, Grid, Typography } from '@mui/material';
import Logo from '../components/Logo';
import BtnMetodoPix from '../components/BtnMetPix';
import BtnMetodoPixParc from '../components/BtnMetPixPar';

const PaymentMethod = () => {
  const nome = 'João';

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={
        { height: '100vh', width: '100vw' }
      }
    >
      <div className="header">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Logo />

          <Typography
            mt={4}
            variant='h3'
            fontWeight="800"
            fontSize="24px"
            lineHeight="32.74px"
            color="#4D4D4D"
          >
            {nome}, como você quer pagar?
          </Typography>
        </Box>
      </div>

      <div className="pix">
        <Box
          mt={4}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="35px"
        >
          <BtnMetodoPix />

          <BtnMetodoPixParc />
        </Box>

      </div>

    </Grid>

  )
}

export default PaymentMethod;

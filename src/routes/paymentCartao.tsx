import { Box, Grid, Typography } from "@mui/material";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import logo from "../assets/img/LogoEnd.svg";
import Logo from "../components/Logo";
import FormComponent from "../components/FormComponent";
import BtnVoltar2 from "../components/BtnVoltar2";
import { InfoTotalParc } from "../components/InfoTotal";
import AccordionFuncionamento from "../components/AccordionFunc";
import { ProgressoCartaoParc } from "../components/ProgressoCartao";

const PaymentCartao = () => {
    const nome = "João";

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ height: "100vh", width: "100%" }}
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
                        variant="h3"
                        fontWeight="800"
                        fontSize="24px"
                        lineHeight="32.74px"
                        color="#4D4D4D"
                        textAlign="center"
                        width="85%"
                    >
                        {nome}, agora pague o restante no cartão
                    </Typography>
                </Box>
            </div>

            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
            >
                <div className="form">
                    <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <FormComponent />
                    </Box>
                </div>

                <BtnVoltar2 />

                <ProgressoCartaoParc />

                <InfoTotalParc />

                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="95%"
                    borderBottom="2px solid #E5E5E5"
                    mb="20px"
                >
                    <AccordionFuncionamento />
                </Box>

                <Typography
                    sx={{
                        color: "#B2B2B2",
                        fontSize: "14px",
                        lineHeight: "19.1px",
                        fontWeight: "600",
                        textTransform: "none",
                    }}
                >
                    Identificador:
                </Typography>

                <Typography
                    sx={{
                        color: "#4D4D4D",
                        fontSize: "14px",
                        lineHeight: "19.1px",
                        fontWeight: "600",
                        textTransform: "none",
                    }}
                >
                    <span>2c1b951f356c4680b13ba1c9fc889c47</span>
                </Typography>

                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    gap="3px"
                    mt="45px"
                    mb="40px"
                    color="#B2B2B2"
                >
                    <Box display="flex">
                        <GppGoodOutlinedIcon fontSize="medium" />
                    </Box>

                    <Box display="flex">
                        <Typography
                            sx={{
                                fontSize: "14px",
                                lineHeight: "18px",
                            }}
                        >
                            Pagamento 100% seguro via:
                        </Typography>
                    </Box>

                    <Box display="flex">
                        <img src={logo} alt="logo da woovi" />
                    </Box>
                </Box>
            </Box>
        </Grid>
    );
};

export default PaymentCartao;

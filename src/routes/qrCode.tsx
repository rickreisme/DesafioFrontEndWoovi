import { Box, Grid, Typography } from "@mui/material";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import logo from "../assets/img/LogoEnd.svg";
import Logo from "../components/Logo";
import QRCodeImg from "../components/qrCodeComponent";
import { BtnCopiarPix, BtnCopiarPixParc } from "../components/BtnCopiar";
import BtnVoltar from "../components/BtnVoltar";
import { ProgressoPix } from "../components/ProgressoPix";
import { InfoTotal, InfoTotalParc } from "../components/InfoTotal";
import AccordionFuncionamento from "../components/AccordionFunc";
import { useEffect, useState } from "react";

const QrCodePageParc = () => {
    const nome = "João";
    const [tempoRestante, setTempoRestante] = useState(300);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setTempoRestante((prevTempo) => {
                if (prevTempo > 0) {
                    return prevTempo - 1;
                } else {
                    clearInterval(intervalo);
                    return prevTempo;
                }
            });
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    const formatTempo = (segundos: number) => {
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;
        return `${
            minutos > 0 ? `${minutos} minuto${minutos !== 1 ? "s" : ""} e ` : ""
        }${segundosRestantes} segundo${segundosRestantes !== 1 ? "s" : ""}`;
    };

    return (
        <Grid container justifyContent="center" alignItems="center">
            <div className="header">
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    mb="40px"
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
                        width="70%"
                    >
                        {nome}, pague a entrada de R$ 15.300,00 pelo Pix
                    </Typography>
                </Box>
            </div>

            <div className="body">
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    {tempoRestante > 0 && <QRCodeImg />}

                    <BtnCopiarPixParc />

                    <BtnVoltar />

                    <Typography
                        sx={{
                            color: "#B2B2B2",
                            fontSize: "16px",
                            lineHeight: "21.82px",
                            fontWeight: "600",
                            textTransform: "none",
                        }}
                    >
                        Prazo de pagamento:
                    </Typography>

                    <Typography
                        sx={{
                            color: "#4D4D4D",
                            fontSize: "16px",
                            lineHeight: "21.82px",
                            fontWeight: "600",
                            textTransform: "none",
                        }}
                    >
                        <span>
                            {tempoRestante > 0
                                ? formatTempo(tempoRestante)
                                : "Tempo esgotado"}
                        </span>
                    </Typography>

                    <ProgressoPix />

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
            </div>
        </Grid>
    );
};

const QrCodePage = () => {
    const nome = "João";
    const [tempoRestante, setTempoRestante] = useState(300);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setTempoRestante((prevTempo) => {
                if (prevTempo > 0) {
                    return prevTempo - 1;
                } else {
                    clearInterval(intervalo);
                    return prevTempo;
                }
            });
        }, 1000);

        return () => clearInterval(intervalo);
    }, []);

    const formatTempo = (segundos: number) => {
        const minutos = Math.floor(segundos / 60);
        const segundosRestantes = segundos % 60;
        return `${
            minutos > 0 ? `${minutos} minuto${minutos !== 1 ? "s" : ""} e ` : ""
        }${segundosRestantes} segundo${segundosRestantes !== 1 ? "s" : ""}`;
    };

    return (
        <Grid container justifyContent="center" alignItems="center">
            <div className="header">
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    mb="40px"
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
                        width="70%"
                    >
                        {nome}, pague a vista o valor de R$ 30.500,00 pelo Pix
                    </Typography>
                </Box>
            </div>

            <div className="body">
                <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    {tempoRestante > 0 && <QRCodeImg />}

                    <BtnCopiarPix />

                    <BtnVoltar />

                    <Typography
                        sx={{
                            color: "#B2B2B2",
                            fontSize: "16px",
                            lineHeight: "21.82px",
                            fontWeight: "600",
                            textTransform: "none",
                        }}
                    >
                        Prazo de pagamento:
                    </Typography>

                    <Typography
                        sx={{
                            color: "#4D4D4D",
                            fontSize: "16px",
                            lineHeight: "21.82px",
                            fontWeight: "600",
                            textTransform: "none",
                            mb: '20px'
                        }}
                    >
                        <span>
                            {tempoRestante > 0
                                ? formatTempo(tempoRestante)
                                : "Tempo esgotado"}
                        </span>
                    </Typography>

                    <InfoTotal />

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
            </div>
        </Grid>
    );
};

export { QrCodePageParc, QrCodePage };

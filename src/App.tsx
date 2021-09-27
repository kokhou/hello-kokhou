import React, {useRef, useState} from 'react'
import {Box, createTheme, CssBaseline, Fade, Grow, IconButton, Snackbar, Stack, ThemeProvider} from '@mui/material';
import MediaControlCard from "./component/ShortIntro";
import imgMyimageexample from "../public/background.jpeg";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {TransitionProps} from "@mui/material/transitions";

export type PageDetail = {
    title: string,
    image: string,
    infos: Info[]
}

export type Info = {
    header: string,
    description: string
}

function App() {
    const list = lisOfPageDetail();
    const [pageIndex, setPageIndex] = useState(0)
    const [pageDetail, setPageDetail] = useState<PageDetail>(list[0]);

    const theme = createTheme({
        typography: {
            size1: {
                fontSize: "6rem"
            },
            fontFamily: [
                'Iceland',
                'display',
            ].join(','),

        },
        components: {
            MuiTypography: {
                defaultProps: {
                    variantMapping: {
                        size1: 'div',
                    },
                },
            },
        },
    });
    const styles = {
        backgroundImage: {
            backgroundImage: `url(${imgMyimageexample})`,
            minWidth: '100%',
            minHeight: '100vh',
            height: '100%',
            width: '100%',
            backgroundPosition: 'center',
            backgroundAttachment: "fixed",
            backgroundColor: 'grey',
            backgroundBlendMode: 'darken'
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box style={styles.backgroundImage}>
                <Stack
                    sx={{p: 5}}
                    direction="row"
                    justifyContent="center">
                    <IconButton onClick={() => {
                        if (pageIndex <= 0) {
                            // setPageIndex(list.length - 1)
                            // setPageDetail(list[list.length - 1]);
                        } else {
                            setPageIndex(pageIndex - 1)
                            setPageDetail(list[pageIndex - 1]);
                        }

                    }}>
                        <KeyboardArrowLeftIcon fontSize='large' sx={{color: 'white'}}/>
                    </IconButton>
                    <MediaControlCard  {...pageDetail} />
                    <IconButton onClick={() => {
                        if (pageIndex >= list.length - 1) {
                            // setPageIndex(0)
                            // setPageDetail(list[0]);
                        } else {
                            setPageIndex(pageIndex + 1)
                            setPageDetail(list[pageIndex + 1]);
                        }
                    }}>
                        <KeyboardArrowRightIcon fontSize='large' sx={{color: 'white'}}/>
                    </IconButton>
                </Stack>
            </Box>
        </ThemeProvider>
    )
}

function lisOfPageDetail() {
    return [
        {
            image: "a.jpg",
            infos: [
                {
                    header: "Hi! I am Choi Kok Hou ",
                    description: "Born in 1992, a cheerful and humorous person, Live in Kuala Lumpur."
                },
                {
                    header: "",
                    description: ""
                },
                {
                    header: "",
                    description: ""
                }
            ],
            title: "Happy "
        },
        {
            image: "a1.jpg",
            infos: [
                {
                    header: "First Company",
                    description: "This is my first company and my first look at working. Been here around 3 years"
                },
                {
                    header: "Software Developer",
                    description: "Android, BB10, Window Phone and Backend."
                },
                {
                    header: "Client",
                    description: "BCA, Mandiri, BTN, etc.. all our client mostly in Indonesia, often flight to client side and get only RM33 allowance per day!!"
                }
            ],
            title: "MyUnos"
        },
        {
            image: "a2a.jpg",
            infos: [
                {
                    header: "Second Company",
                    description: "Silverlake is my second company, invited by my ex-colleague. Working in few projects, the most remembered project is OCBC Indonesia, been there 1 year with 27 flights, because don't company don't want apply visa"
                },
                {
                    header: "Software Developer",
                    description: "Android Lead"
                },
                {
                    header: "",
                    description: ""
                }],
            title: "Silverlake"
        },
        {
            image: "a2b.jpg",
            infos: [
                {
                    header: "Second Company",
                    description: "Silverlake is my second company, invited by my ex-colleague. Working in few projects, the most remembered project is OCBC Indonesia, been there 1 year with 27 flights, because don't company don't want apply visa"
                },
                {
                    header: "Software Developer",
                    description: "Android Lead"
                },
                {
                    header: "Good Bye !",
                    description: "Silverlake"
                }],
            title: "Silverlake"
        },
        {
            image: "a3.jpg",
            infos: [
                {
                    header: "Third Company",
                    description: "Apply Android Mobile Lead, become Bangara"
                },
                {
                    header: "Solution Consultant",
                    description: "Description: Apa bun Kok Hou"
                },
                {
                    header: "Ok Ok",
                    description: "Learn a lot, meet some great people here and good lucky to myself"
                }],
            title: "Worldline"
        },
        {
            image: "ac.jpg",
            infos: [
                {
                    header: "I participated in many outdoor and adventurous activities",
                    description: ""
                },
                {
                    header: "Been to many counties.",
                    description: ""
                },
                {
                    header: "Start my own business and investments",
                    description: ""
                }],
            title: "Life"
        },
        {
            image: "c1.png",
            infos: [
                {
                    header: "Diving",
                    description: "AOW, more than 40 dives, usually dive in Tioman Island"
                },
                {
                    header: "",
                    description: ""
                },
                {
                    header: "",
                    description: ""
                }],
            title: "Adventurous"
        },
        {
            image: "c2.png",
            infos: [
                {
                    header: "Diving",
                    description: "AOW, more than 40 dives, usually dive in Tioman Island"
                },
                {
                    header: "Marine Life",
                    description: "The most exciting thing is to see turtles, sharks and dolphins"
                },
                {
                    header: "",
                    description: ""
                }],
            title: "Adventurous"
        },
        {
            image: "c3.jpeg",
            infos: [
                {
                    header: "Surfing",
                    description: "Surf twice, hope this December can go surfing"
                },
                {
                    header: "",
                    description: ""
                },
                {
                    header: "",
                    description: ""
                }],
            title: "Adventurous"
        },
        {
            image: "c5.jpg",
            infos: [
                {
                    header: "Bungee Jumping (Australia)",
                    description: "Australia - Bungee Jumping, this was my second jump!"
                },
                {
                    header: "",
                    description: ""
                },
                {
                    header: "",
                    description: ""
                }],
            title: "Adventurous"
        },
        {
            image: "c6.jpg",
            infos: [
                {
                    header: "Bungee Jumping (Australia) and (Macau)",
                    description: "Australia - Bungee Jumping, this was my second jump! Macau - The world highest Bungee Jumping. is really F***ing height !!"
                },
                {
                    header: "",
                    description: ""
                },
                {
                    header: "",
                    description: ""
                }],
            title: "Adventurous"
        },
        {
            image: "c6a.jpg",
            infos: [
                {
                    header: "Bungee Jumping (Australia) and (Macau)",
                    description: "Australia - Bungee Jumping, this was my second jump! Macau - The world highest Bungee Jumping. is really F***ing height !!"
                },
                {
                    header: "Skydiving (Australia)",
                    description: "Best free fall all the time, video and image gone..."
                },
                {
                    header: "",
                    description: ""
                }],
            title: "Adventurous"
        },
        {
            image: "c7.jpg",
            infos: [
                {
                    header: "Bungee Jumping (Australia) and (Macau)",
                    description: "Australia - Bungee Jumping, this was my second jump! Macau - The world highest Bungee Jumping. is really F***ing height !!"
                },
                {
                    header: "Skydiving (Australia)",
                    description: "Best free fall all the time, video and image gone..."
                },
                {
                    header: "Skiing (Korea)",
                    description: "Don't know how to Ski, need to go and learn next time."
                }],
            title: "Adventurous"
        },
        {
            image: "c9.jpg",
            infos: [
                {
                    header: "Viper Channel",
                    description: "Attended around 10 times for viper channel"
                },
                {
                    header: "",
                    description: ""
                },
                {
                    header: "",
                    description: ""
                }],
            title: "Group Events"
        },
        {
            image: "c8.jpg",
            infos: [
                {
                    header: "Viper Channel",
                    description: "Attended around 10 times for viper channel"
                },
                {
                    header: "Marathon",
                    description: "Can't count already... haha"
                },
                {
                    header: "",
                    description: ""
                }],
            title: "Group Events"
        },
        {
            image: "c10.jpg",
            infos: [
                {
                    header: "Viper Channel",
                    description: "Attended around 10 times for viper channel"
                },
                {
                    header: "Marathon",
                    description: "Can't count already... haha"
                },
                {
                    header: "Volunteer of Unicycle",
                    description: "Volunteer of Malaysian first Unicycle Association for 6 years, since 2020 MCO then can't organize event."
                }],
            title: "Group Events"
        },
        {
            image: "d1.jpg",
            infos: [
                {
                    header: "Kong Fo Cha",
                    description: "This is a share business with my friend, will close down next month due to MCO affect. Investment failure"
                },
                {
                    header: "",
                    description: ""
                },
                {
                    header: "",
                    description: ""
                }],
            title: "Business and Investment"
        },
        {
            image: "d1.jpg",
            infos: [
                {
                    header: "Kong Fo Cha",
                    description: "This is a share business with my friend, will close down next month due to MCO affect."
                },
                {
                    header: "",
                    description: ""
                },
                {
                    header: "",
                    description: ""
                }],
            title: "Business and Investment"
        },
        {
            image: "d2.jpg",
            infos: [
                {
                    header: "Kong Fo Cha",
                    description: "This is a share business with my friend, will close down next month due to MCO affect. Can this earn money? Yes, but to slow for now, Investment failure"
                },
                {
                    header: "",
                    description: ""
                },
                {
                    header: "",
                    description: ""
                }],
            title: "Business and Investment"
        },
        {
            image: "d3.png",
            infos: [
                {
                    header: "Kong Fo Cha",
                    description: "This is a share business with my friend, will close down next month due to MCO affect. Can this earn money? Yes, but to slow for now, Investment failure"
                },
                {
                    header: "Eilift.store",
                    description: `Online e-commerce, can go and support http://www.eilift.store`
                },
                {
                    header: "",
                    description: ""
                }],
            title: "Business and Investment"
        },
        {
            image: "e1.jpg",
            infos: [
                {
                    header: "IG: kokhouchoi",
                    description: ""
                },
                {
                    header: "FB: 蔡国豪",
                    description: ""
                },
                {
                    header: "Phone Number",
                    description: "0123456789"
                }],
            title: "Contact"
        }
    ]
}

export default App

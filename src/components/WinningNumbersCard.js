import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {Box, CircularProgress, Pagination, Stack} from "@mui/material";
import '../css/lotto/common.css'
import {useFetchPaginatedData} from "../hooks/useFetchPaginatedData";
import {useEffect, useState} from "react";
import LottoNumber from "./LottoNumber";

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function WinningNumbersCard() {
    const [expanded, setExpanded] = React.useState(false);
    const apiUrl = process.env.REACT_APP_API_URL;
    const { data: lottoDrawsData, loading } = useFetchPaginatedData(`${apiUrl}/api/lotto`, 0, 5);
    const [latestDraw, setLatestDraw] = useState(null);

    useEffect(() => {
        if (lottoDrawsData && lottoDrawsData.content && lottoDrawsData.content.length > 0) {
            // 최초 로딩 시에만 최신 당첨 번호를 설정
            setLatestDraw(prevLatestDraw => prevLatestDraw || lottoDrawsData.content[0]);
            console.log(latestDraw);
        }
    }, [lottoDrawsData]);


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    if(loading || !lottoDrawsData){
        return (
            <Card sx={{ maxWidth: 'auto', m: 2 }}>
                <CircularProgress />
            </Card>
        );
    }

    return (
        <Card sx={{ maxWidth: 'auto', m: 2 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        로또
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={`${latestDraw.drawNo}회 당첨번호`}
                subheader={`(${latestDraw.drawDate} 추첨)`}
            />
            <CardContent>
                <Box>
                    <Stack direction="row" spacing={{xs: 1, sm :2}} justifyContent="center">
                        <LottoNumber number={latestDraw.drawNo1} />
                        <LottoNumber number={latestDraw.drawNo2} />
                        <LottoNumber number={latestDraw.drawNo3} />
                        <LottoNumber number={latestDraw.drawNo4} />
                        <LottoNumber number={latestDraw.drawNo5} />
                        <LottoNumber number={latestDraw.drawNo6} />
                        <Avatar className="winning-numbers" sx={{ background: 'none', color: 'black'}}>+</Avatar>
                        <LottoNumber number={latestDraw.bonusNo} />
                    </Stack>
                </Box>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <Stack direction="row" sx={{marginLeft : 'auto'}}>
                    <Box sx={{display : 'flex', alignItems : 'center'}}>
                        <Typography align="justify" variant="body2" sx={{marginLeft : 'auto'}} >더보기</Typography>
                    </Box>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </Stack>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Box>
                        <Stack spacing={1}>
                            <Typography variant="subtitle2">1092회 (2023년 11월 04일 추첨)</Typography>
                            <Stack direction="row" spacing={{xs: 1, sm :2}} justifyContent="center">
                                <Avatar className="winning-numbers">7</Avatar>
                                <Avatar className="winning-numbers">18</Avatar>
                                <Avatar className="winning-numbers">19</Avatar>
                                <Avatar className="winning-numbers">26</Avatar>
                                <Avatar className="winning-numbers">33</Avatar>
                                <Avatar className="winning-numbers">45</Avatar>
                                <Avatar className="winning-numbers" sx={{ background: 'none', color: 'black'}}>+</Avatar>
                                <Avatar className="winning-numbers">37</Avatar>
                            </Stack>
                            <Typography variant="subtitle2">1092회 (2023년 11월 04일 추첨)</Typography>
                            <Stack direction="row" spacing={{xs: 1, sm :2}} justifyContent="center">
                                <Avatar className="winning-numbers">7</Avatar>
                                <Avatar className="winning-numbers">18</Avatar>
                                <Avatar className="winning-numbers">19</Avatar>
                                <Avatar className="winning-numbers">26</Avatar>
                                <Avatar className="winning-numbers">33</Avatar>
                                <Avatar className="winning-numbers">45</Avatar>
                                <Avatar className="winning-numbers" sx={{ background: 'none', color: 'black'}}>+</Avatar>
                                <Avatar className="winning-numbers">37</Avatar>
                            </Stack>
                            <Typography variant="subtitle2">1092회 (2023년 11월 04일 추첨)</Typography>
                            <Stack direction="row" spacing={{xs: 1, sm :2}} justifyContent="center">
                                <Avatar className="winning-numbers">7</Avatar>
                                <Avatar className="winning-numbers">18</Avatar>
                                <Avatar className="winning-numbers">19</Avatar>
                                <Avatar className="winning-numbers">26</Avatar>
                                <Avatar className="winning-numbers">33</Avatar>
                                <Avatar className="winning-numbers">45</Avatar>
                                <Avatar className="winning-numbers" sx={{ background: 'none', color: 'black'}}>+</Avatar>
                                <Avatar className="winning-numbers">37</Avatar>
                            </Stack>
                            <Typography variant="subtitle2">1092회 (2023년 11월 04일 추첨)</Typography>
                            <Stack direction="row" spacing={{xs: 1, sm :2}} justifyContent="center">
                                <Avatar className="winning-numbers">7</Avatar>
                                <Avatar className="winning-numbers">18</Avatar>
                                <Avatar className="winning-numbers">19</Avatar>
                                <Avatar className="winning-numbers">26</Avatar>
                                <Avatar className="winning-numbers">33</Avatar>
                                <Avatar className="winning-numbers">45</Avatar>
                                <Avatar className="winning-numbers" sx={{ background: 'none', color: 'black'}}>+</Avatar>
                                <Avatar className="winning-numbers">37</Avatar>
                            </Stack>
                            <Typography variant="subtitle2">1092회 (2023년 11월 04일 추첨)</Typography>
                            <Stack direction="row" spacing={{xs: 1, sm :2}} justifyContent="center">
                                <Avatar className="winning-numbers">7</Avatar>
                                <Avatar className="winning-numbers">18</Avatar>
                                <Avatar className="winning-numbers">19</Avatar>
                                <Avatar className="winning-numbers">26</Avatar>
                                <Avatar className="winning-numbers">33</Avatar>
                                <Avatar className="winning-numbers">45</Avatar>
                                <Avatar className="winning-numbers" sx={{ background: 'none', color: 'black'}}>+</Avatar>
                                <Avatar className="winning-numbers">37</Avatar>
                            </Stack>
                        </Stack>
                        <Stack justifyContent="center" alignItems="center" sx={{mt: 2}}>
                            <Pagination count={10} color="primary"/>
                        </Stack>
                    </Box>
                </CardContent>
            </Collapse>
        </Card>
    );
}

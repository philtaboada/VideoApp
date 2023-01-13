import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'



const ChannelCard = ({ channelDetail, marginTop }) => (
    <Box
        sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '356px', md: '320px' },
            height: '326px',
            margin: 'auto',
            marginTop: marginTop
        }}
    >
        <Link to={`/channel/${channelDetail?.id?.channelId}`}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' }} >
                <CardMedia
                    image={channelDetail?.snippet?.thumbnails?.high.url || 'http://dergipark.org.tr/assets/app/images/buddy_sample.png'}
                    alt={channelDetail?.snippet?.title}
                    sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
                />
                <Typography>
                    {channelDetail?.snippet?.title}
                    <CheckCircle
                        sx={{ fontSize: 14, color: 'gray', ml: '5px' }}
                    />
                </Typography>
                {channelDetail?.stadistics?.subscriberCount && (
                    <Typography>
                        {parseInt(channelDetail?.stadistics?.subscriberCount).toLocaleString()}
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
)

export default ChannelCard
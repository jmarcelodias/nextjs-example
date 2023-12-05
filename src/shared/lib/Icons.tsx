// import icons from react-icons
import { AiFillGithub, AiFillLinkedin, AiFillFacebook, AiOutlineClockCircle } from 'react-icons/ai'
import { TfiWorld } from 'react-icons/tfi'
import { BsCalendar2Date, BsTicketPerforated } from 'react-icons/bs' 
import { GrLocation } from 'react-icons/gr' 
//
import { IconsTypes } from '../config/types'


// icon export 
export const icons : IconsTypes = {
    github : AiFillGithub,
    linkedin : AiFillLinkedin,
    facebook : AiFillFacebook,
    web : TfiWorld,
    calendar : BsCalendar2Date,
    clock : AiOutlineClockCircle,
    location : GrLocation,
    ticket : BsTicketPerforated
}
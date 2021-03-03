import { Apps, Create, Drafts, Edit,BookmarkBorder, ExpandLess, FiberManualRecord, FileCopy, Inbox, InsertComment, PeopleAlt } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components';
import SidebarOption from "./SidebarOption"
function Sidebar() {
    return (
        <SidebarContainer>
            <SidebarHeader>
                <SidebarInfo>
                    <h2>MDC</h2>
                    <h3>
                        <FiberManualRecord/>
                        Mate Daniel
                    </h3>
                </SidebarInfo>
                <Create />
            </SidebarHeader>
            <SidebarOption Icon={InsertComment} title="Channel browser" /> 
            <SidebarOption Icon={Inbox} title="Mentions & reactions" />
            <SidebarOption Icon={Drafts} title="Saved items" />
            <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
            <SidebarOption Icon={PeopleAlt} title="Channel browser" />
            <SidebarOption Icon={Apps} title="People & user groups" />
            <SidebarOption Icon={FileCopy} title="People & user groups" />
            <SidebarOption Icon={ExpandLess} title="People & user groups" />

            
        </SidebarContainer>
    )
}

export default Sidebar


const SidebarContainer = styled.div`
    color: white;
    background-color: var(--slack-color);
    flex: 0.3;
    border-top: 1px solid #49274b;
    max-width: 260px;
    margin-top: 60px;
`;

const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #49274b;
    padding: 13px;
    > .MuiSvgIcon-root {
        padding: 10px;
        color:  #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 999px;
    }
`;


const SidebarInfo = styled.div`
    flex: 1;
    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;
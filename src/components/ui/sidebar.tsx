"use client";

import { useState } from "react";
import { Layout, Menu } from "antd";
import './scrollbar.css'
import { sidebarItems } from "@/constants/sidebarItems";
import { USER_ROLE } from "@/constants/role";
import { getUserInfo } from "@/services/auth.services";
import Link from "next/link";
import dynamic from "next/dynamic";

const { Sider } = Layout;

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);

    const { role } = getUserInfo() as any;

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            width={250}
            style={{
                overflow: "auto",
                height: "100vh",
                position: "sticky",
                left: 0,
                top: 0,
                bottom: 0,

            }}
        >
            <div
                style={{
                    color: "white",
                    fontSize: "2rem",
                    textAlign: "center",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                }}
            >
                <Link style={{ color: 'white' }} href={'/'}>UMS</Link>
            </div>
            <Menu
                theme="dark"
                defaultSelectedKeys={["1"]}
                mode="inline"
                items={sidebarItems(role)}
            />




            <style jsx>{`
        /* Customize the scrollbar */
        ::-webkit-scrollbar {
          width: 10px; /* Adjust the scrollbar width */
        }

        /* Customize the thumb (drag handle) of the scrollbar */
        ::-webkit-scrollbar-thumb {
          background: #333; /* Change the thumb color */
          border-radius: 5px; /* Adjust the thumb's border radius */
        }

        /* Customize the track (background) of the scrollbar */
        ::-webkit-scrollbar-track {
          background: #f1f1f1; /* Change the track color */
        }
      `}</style>


        </Sider>
    );
};

export default dynamic(() => Promise.resolve(SideBar), { ssr: false })
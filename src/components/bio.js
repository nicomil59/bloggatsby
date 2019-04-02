import { Link, StaticQuery, graphql } from "gatsby"
import React from "react"

import { Avatar, List, Divider } from 'antd'


const Bio = () => (
  <StaticQuery
    query={
      graphql `
        query {
          site {
            siteMetadata {
              author
              bio
              authorImage
            }
          }
        }
      `
    }
    render={data => (
      <>
        <Divider orientation="left">Auteur</Divider>
        <List.Item>
          <List.Item.Meta
            avatar={
                <Avatar 
                    size={64}
                    src={data.site.siteMetadata.authorImage}
                />
            }
            title={<Link to="/about">{data.site.siteMetadata.author}</Link>}    
            description={data.site.siteMetadata.bio}    
          />
        </List.Item>
      </>
    )} 
  
  
  />

  
)
    
    
    {/* <Avatar src="https://core.pupcdn.com/assets/puppyspot/img/schema/breed/labrador-retriever_aspect-ratio_1x1.jpg" />
    
  
    <h1 style={{ fontSize: "1.5rem" }}>John Doe</h1>
    <p style={{ fontSize: "1rem" }}>Developpeur web en devenir. Maîtrise les langages HTML5, CSS3 et JavaScript</p> */}
  
  




export default Bio
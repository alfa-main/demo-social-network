import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { Button, Card, Col, Image, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { PostType } from '../../../../types/types';
import s from './Post.module.css';

type PostProps = {
  increaseLike: (postId: number) => void
  decreaseLike: (postId: number) => void
  deletePost: (postId: number) => void
  post: PostType
}

const Post = (props: PostProps) => {
  let validateUrlImg = /^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/;

  const onDelPost = () => {
    props.deletePost(props.post.id);
  }

  return (
    <Card
      hoverable
      style={{ width: 500, marginBottom: '20px' }}
      cover={
        props.post.image.match(validateUrlImg) !== null
          ? <Image alt="example" src={props.post.image} />
          : <div></div>
      }
    >
      <Meta title={props.post.title} description={props.post.message} style={{ paddingBottom: '20px' }} />
      <Row className={s.post_likes}>
        <Col span={18}>
          {props.post.liked ?
            <LikeOutlined onClick={() => { props.decreaseLike(props.post.id) }} style={{ color: 'red', fontSize: '20px' }} /> :
            <LikeOutlined onClick={() => { props.increaseLike(props.post.id) }} style={{ fontSize: '20px' }} />}
        </Col>
        <Col span={6}>
          <p>Like: <span>{props.post.likesCount}</span></p>
        </Col>
      </Row>
      <Button danger type={'primary'} onClick={onDelPost}>Delete post</Button>
    </Card>
  );
}

export default Post;


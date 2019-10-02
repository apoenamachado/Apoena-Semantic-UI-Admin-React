import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import 'semantic-ui-css/semantic.min.css'
import {
  Button,
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Card,
  Menu,
  Segment,
  Step,
  Table,
  Icon,
  Form, 
  Message,
  Feed,
  Statistic,
  Item,
  Confirm,
  Select,
  Search,
  Label
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const style = {
  h1: {
    fontSize: '4em',
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    marginTop: '2em',
    padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
}

function App() {

  let state = {show:false}

  return (
    <div className="App">

 <Container style={{ marginTop: '3em' }}>

      <Header as='h1' style={style.h1} textAlign='center'>Apona Semantic-UI Admin - React </Header>

      {/* Menu Superior */}
      

      <Header as='h1' icon textAlign='center'>
      <Icon name='settings' />
        Menu Superior
      <Header.Subheader>
        Exemplo de Menu Superior
      </Header.Subheader>
    </Header>


      <Menu size='large' stackable >
        <Menu.Item>
          <img src='/logo.png' />
        </Menu.Item>
        <Menu.Item header>
          GAMEAPI
        </Menu.Item>

        <Menu.Item
          name='gamepad'
          //active={activeItem === 'gamepad'}
          onClick={()=>{ console.log('Apoena testando click') }}
        >
          <Icon name='gamepad' />
        </Menu.Item>
        <Menu.Item
          name='home'
          //active={activeItem === 'home'}
          onClick={()=>{ console.log('Apoena testando click') }}
        />
        <Menu.Item
          name='messages'
          //active={activeItem === 'messages'}
          onClick={()=>{ console.log('Apoena testando click') }}
        />

        <Menu.Menu position='right'>
        
          <Dropdown item text='Profile'>
            <Dropdown.Menu>
              <Dropdown.Item>Editar</Dropdown.Item>
              <Dropdown.Item>Sair</Dropdown.Item>
              <Dropdown.Item>Outra Coisa</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Menu.Item>
            <Button primary>Cadastro</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

    {/* GRIDS */}
    <Header as='h1' icon textAlign='center'>
        Grids
      <Header.Subheader>
        Exemplo de Grids
      </Header.Subheader>
    </Header>

    <Grid container columns={4} doubling stackable>
      <Grid.Column>
        <Segment>Studio</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Studio</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Studio</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Studio</Segment>  
      </Grid.Column>
      <Grid.Column>
        <Segment>Studio</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Studio</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Studio</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Studio</Segment>
      </Grid.Column>
    </Grid>


    {/* TABELAS */}
    <Header as='h1' icon textAlign='center'>
        Tabelas
      <Header.Subheader>
        Exemplo de Tabelas
      </Header.Subheader>
    </Header>

    <Table collapsing>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Avatar</Table.HeaderCell>
          <Table.HeaderCell>Nome</Table.HeaderCell>
          <Table.HeaderCell>Descrição</Table.HeaderCell>
          <Table.HeaderCell>Gẽnero</Table.HeaderCell>
          <Table.HeaderCell>Ação</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>01</Table.Cell>
          <Table.Cell>

            <Header as='h4' image>
              <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='big' />
              <Header.Content>
                Jogo 1
                <Header.Subheader>Descrição jogo 1</Header.Subheader>
              </Header.Content>
            </Header>

          </Table.Cell>
          <Table.Cell>Jogo 1</Table.Cell>
          <Table.Cell>Descrição</Table.Cell>
          <Table.Cell>Arcade</Table.Cell>
          <Table.Cell><Button basic>Editar</Button></Table.Cell>
        </Table.Row>
        <Table.Row>
        <Table.Cell>01</Table.Cell>
          <Table.Cell>

            <Header as='h4' image>
              <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='mini' />
              <Header.Content>
                Jogo 2
                <Header.Subheader>Descrição do Jogo 2</Header.Subheader>
              </Header.Content>
            </Header>
            
          </Table.Cell>
          <Table.Cell>Jogo 1</Table.Cell>
          <Table.Cell>Descrição</Table.Cell>
          <Table.Cell>RPG</Table.Cell>
          <Table.Cell><Button basic>Editar</Button></Table.Cell>
        </Table.Row>
        <Table.Row>
        <Table.Cell>01</Table.Cell>
        <Table.Cell>

          <Header as='h4' image>
            <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
            <Header.Content>
              Jogo 3
              <Header.Subheader>Teste de Descrição</Header.Subheader>
            </Header.Content>
          </Header>

          </Table.Cell>
          <Table.Cell>Jogo 1</Table.Cell>
          <Table.Cell>Descrição</Table.Cell>
          <Table.Cell>Arcade</Table.Cell>
          <Table.Cell><Button basic>Editar</Button></Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>


    {/* Cards */}
    <Header as='h1' icon textAlign='center'>
        Cards
      <Header.Subheader>
        Exemplo de Cards
      </Header.Subheader>
    </Header>


    <Card.Group itemsPerRow={4}>
      <Card
        raised  
        href='#card-example-link-card'
        header='Cartão Simples de Exemplo'
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
      />

      <Card
        href='#card-example-link-card'
        header='Cartão Simples de Exemplo'
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
      />

      <Card
        href='#card-example-link-card'
        header='Cartão Simples de Exemplo'
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
      />

      <Card
        href='#card-example-link-card'
        header='Cartão Simples de Exemplo'
        meta='Friend'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
      />

    </Card.Group >

    <Card.Group itemsPerRow={4}>
    <Card raised>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
        />
        <Card.Header>Steve Sanders</Card.Header>
        <Card.Meta>Friends of Elliot</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/molly.png'
        />
        <Card.Header>Molly Thomas</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Molly wants to add you to the group <strong>musicians</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
        />
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg'
        />
        <Card.Header>Jenny Lawrence</Card.Header>
        <Card.Meta>New User</Card.Meta>
        <Card.Description>
          Jenny requested permission to view your contact details
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Approve
          </Button>
          <Button basic color='red'>
            Decline
          </Button>
        </div>
      </Card.Content>
    </Card>
    
    </Card.Group>

    {/* Outros cards */}
    
    <Card.Group itemsPerRow={4}>
    <Card raised>
    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Nome do Jogo</Card.Header>
      <Card.Meta>Cadastrado em 12/12/2018</Card.Meta>
      <Card.Description>
        Essa seria uma descrição do jogo
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='download' />
        10 Donwloads
      </a>
    </Card.Content>
  </Card>

  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Nome do Jogo</Card.Header>
      <Card.Meta>Cadastrado em 12/12/2018</Card.Meta>
      <Card.Description>
        Essa seria uma descrição do jogo
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='download' />
        10 Donwloads
      </a>
    </Card.Content>
  </Card>

  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/molly.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Nome do Jogo</Card.Header>
      <Card.Meta>Cadastrado em 12/12/2018</Card.Meta>
      <Card.Description>
        Essa seria uma descrição do jogo
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='download' />
        10 Donwloads
      </a>
    </Card.Content>
  </Card>

  <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/elliot.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Nome do Jogo</Card.Header>
      <Card.Meta>Cadastrado em 12/12/2018</Card.Meta>
      <Card.Description>
        Essa seria uma descrição do jogo
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='download' />
        10 Donwloads
      </a>
    </Card.Content>
  </Card>

  </Card.Group>


  <Card.Group itemsPerRow={3}>

  <Card raised>
    <Card.Content>
      <Card.Header>Outro Exemplo</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
              You added <a>Jenny Hess</a> to your <a>coworker</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
              You added <a>Elliot Baker</a> to your <a>musicians</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>


  <Card>
    <Card.Content>
      <Card.Header>Outro Exemplo</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
              You added <a>Jenny Hess</a> to your <a>coworker</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
              You added <a>Elliot Baker</a> to your <a>musicians</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>

  <Card>
    <Card.Content>
      <Card.Header>Outro Exemplo</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Feed.Content>
            <Feed.Date content='1 day ago' />
            <Feed.Summary>
              You added <a>Jenny Hess</a> to your <a>coworker</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/molly.png' />
          <Feed.Content>
            <Feed.Date content='3 days ago' />
            <Feed.Summary>
              You added <a>Molly Malone</a> as a friend.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event>
          <Feed.Label image='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
          <Feed.Content>
            <Feed.Date content='4 days ago' />
            <Feed.Summary>
              You added <a>Elliot Baker</a> to your <a>musicians</a> group.
            </Feed.Summary>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </Card.Content>
  </Card>


  </Card.Group>  

    {/* Labels */}
    <Header as='h1' icon textAlign='center'>
        Labels
      <Header.Subheader>
        Exemplo de Labels
      </Header.Subheader>
    </Header>

    <br />

    <Label as='a'>
      <Image avatar spaced='right' src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
      Elliot
    </Label>
    <Label as='a'>
      <img src='https://react.semantic-ui.com/images/avatar/small/stevie.jpg' />
      Stevie
    </Label>

    <br />
    <br />

    <Grid columns={3}>
    <Grid.Column>
      <Image
        fluid
        label={{ as: 'a', corner: 'left', icon: 'heart' }}
        src='https://react.semantic-ui.com/images/wireframe/image.png'
      />
    </Grid.Column>

    <Grid.Column>
      <Image
        fluid
        label={{ as: 'a', corner: 'left',  icon: 'heart' }}
        src='https://react.semantic-ui.com/images/wireframe/image.png'
      />
    </Grid.Column>

    <Grid.Column>
      <Image
        fluid
        label={{ as: 'a', color: 'red', corner: 'right', icon: 'save' }}
        src='https://react.semantic-ui.com/images/wireframe/image.png'
      />
    </Grid.Column>
  </Grid>

  <br />

  <div>
    <Label as='a' color='blue' image>
      <img src='https://react.semantic-ui.com/images/avatar/small/veronika.jpg' />
      Veronika
      <Label.Detail>Friend</Label.Detail>
    </Label>
    <Label as='a' color='teal' image>
      <img src='https://react.semantic-ui.com/images/avatar/small/jenny.jpg' />
      Veronika
      <Label.Detail>Friend</Label.Detail>
    </Label>
    <Label as='a' color='yellow' image>
      <img src='https://react.semantic-ui.com/images/avatar/small/christian.jpg' />
      Helen
      <Label.Detail>Co-worker</Label.Detail>
    </Label>
  </div>

  <br />
  <br />

  <Menu compact>
    <Menu.Item as='a'>
      <Icon name='mail' /> Messages
      <Label color='red' floating>
        22
      </Label>
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='users' /> Friends
      <Label color='teal' floating>
        22
      </Label>
    </Menu.Item>
  </Menu>

  <br />
  <br />

  <Grid columns={2}>
    <Grid.Column>
      <Segment raised>
        <Label as='a' color='red' ribbon>
          Overview
        </Label>
        <span>Account Details</span>

        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />

        <Label as='a' color='blue' ribbon>
          Community
        </Label>
        <span>User Reviews</span>

        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Grid.Column>

    <Grid.Column>
      <Segment>
        <Label as='a' color='orange' ribbon='right'>
          Specs
        </Label>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />

        <Label as='a' color='teal' ribbon='right'>
          Reviews
        </Label>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Grid.Column>
  </Grid>




    {/* Estatisticas */}
    <Header as='h1' icon textAlign='center'>
        Estatisticas
      <Header.Subheader>
        Exemplo de Header Estatisticas
      </Header.Subheader>
    </Header>


    <Statistic.Group widths='four'>
        <Statistic>
          <Statistic.Value>22</Statistic.Value>
          <Statistic.Label>Saves</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value text>
            Three
            <br />
            Thousand
          </Statistic.Value>
          <Statistic.Label>Signups</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>
            <Icon name='plane' />9
          </Statistic.Value>
          <Statistic.Label>Jogos</Statistic.Label>
        </Statistic>

        <Statistic>
          <Statistic.Value>
            <Image src='https://react.semantic-ui.com/images/avatar/small/joe.jpg' className='circular inline' />
            25
          </Statistic.Value>
          <Statistic.Label>Usuários</Statistic.Label>
        </Statistic>
      </Statistic.Group>








    {/* Mensagens */}
    <Header as='h1' icon textAlign='center'>
        Mensagens
      <Header.Subheader>
        Exemplo de Mensagens
      </Header.Subheader>
    </Header>


    <Message icon size='large' floating>
    <Icon name='circle notched' loading />
    <Message.Content>
      <Message.Header>Aguarde</Message.Header>
        Mensagem descritiva do loading
      </Message.Content>
    </Message>

    <Message
      floating
      size='large'
      icon='inbox'
      header='Exemplo de uma mensagem com ícone.'
      content='Get the best news in your e-mail every day.'
    />

    <Message
      size='large'
      success
      header='Your user registration was successful'
      content='You may now log-in with the username you have chosen'
    />

    <Message
      size='large'
      error
      header='There was some errors with your submission'
      list={[
        'You must include both a upper and lower case letters in your password.',
        'You need to select your home country.',
      ]}
    />

    {/* Forms */}
    <Header as='h1' icon textAlign='center'>
        Formulários
      <Header.Subheader>
        Exemplo de Formulários
      </Header.Subheader>
    </Header>

    <div>
      <Message
        size='large'
        attached
        header='Cadastro de Alguma coisa!'
        content='Use este formulário para cadastrar alguma coisa'
      />
      <Form className='attached fluid segment' size='large'>
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label='First Name'
            placeholder='First Name'
            type='text'
          />
          <Form.Input
            fluid
            label='Last Name'
            placeholder='Last Name'
            type='text'
          />
        </Form.Group>
        <Form.Input label='Username' placeholder='Username' type='text' />
        <Form.Input label='Password' type='password' />
        <Select label='Selecione' placeholder='Selecione' options={[
            { key: 'af', value: 'af', text: 'Afghanistan' },
            { key: 'ax', value: 'ax', text: 'Aland Islands' },
            { key: 'al', value: 'al', text: 'Albania' },
            { key: 'dz', value: 'dz', text: 'Algeria' },
            { key: 'as', value: 'as', text: 'American Samoa' },
            { key: 'ad', value: 'ad', text: 'Andorra' },
            { key: 'ao', value: 'ao', text: 'Angola' }
          ]
        } />
        <Form.Checkbox inline label='I agree to the terms and conditions' />
        <Button primary size='large'>Submit</Button>
      </Form>

      {/*
      <Message attached='bottom' warning size='large'>
        <Icon name='help' />
        Already signed up?&nbsp;<a href='#'>Login here</a>&nbsp;instead.
      </Message>
      */}

    </div>

    {/* Passos */}
    <Header as='h1' icon textAlign='center'>
        Passos
      <Header.Subheader>
        Exemplo de Passo a Passo
      </Header.Subheader>
    </Header>

    <Step.Group stackable='tablet' size='large'>
    <Step>
      <Icon name='plane' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>
    <Step active>
      <Icon name='dollar' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>
    <Step >
      <Icon name='info' />
      <Step.Content>
        <Step.Title>Outro Passo</Step.Title>
        <Step.Description>Informações sobre o passo</Step.Description>
      </Step.Content>
    </Step>
    <Step disabled>
      <Icon name='info circle' />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
        <Step.Description>Verify order details</Step.Description>
      </Step.Content>
    </Step>
    </Step.Group>




    <Step.Group vertical size='large'>
    <Step completed>
      <Icon name='truck' />
      <Step.Content>
        <Step.Title>Shipping</Step.Title>
        <Step.Description>Choose your shipping options</Step.Description>
      </Step.Content>
    </Step>

    <Step completed>
      <Icon name='payment' />
      <Step.Content>
        <Step.Title>Billing</Step.Title>
        <Step.Description>Enter billing information</Step.Description>
      </Step.Content>
    </Step>

    <Step active>
      <Icon name='info' />
      <Step.Content>
        <Step.Title>Confirm Order</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>




    {/* Itens */}
    <Header as='h1' icon textAlign='center'>
        Itens
      <Header.Subheader>
        Exemplo de Itens
      </Header.Subheader>
    </Header>

    <Item.Group divided>
    <Item>
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Item.Content verticalAlign='middle'>

      <Item.Header>Arrowhead Valley Camp</Item.Header>
        <Item.Meta>
          <span className='price'>$1200</span>
          <span className='stay'>1 Month</span>
        </Item.Meta>
        <Item.Description>Descrição do conteúdo</Item.Description>

      </Item.Content>
    </Item>


    <Item>
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/joe.jpg' />
      <Item.Content verticalAlign='middle'>

      <Item.Header>Arrowhead Valley Camp</Item.Header>
        <Item.Meta>
          <span className='price'>$1200</span>
          <span className='stay'>1 Month</span>
        </Item.Meta>
        <Item.Description>Descrição do conteúdo</Item.Description>

      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='https://react.semantic-ui.com/images/wireframe/image.png' />
      <Item.Content verticalAlign='middle'>

      <Item.Header>Arrowhead Valley Camp</Item.Header>
        <Item.Meta>
          <span className='price'>$1200</span>
          <span className='stay'>1 Month</span>
        </Item.Meta>
        <Item.Description>Descrição do conteúdo</Item.Description>

      </Item.Content>
    </Item>
  </Item.Group>


    {/* Segmentos */}
    <Header as='h1' icon textAlign='center'>
        Segmentos
      <Header.Subheader>
        Exemplo de Segmentos
      </Header.Subheader>
    </Header>

    <Segment placeholder raised>
    <Header icon>
      <Icon name='pdf file outline' />
      No documents are listed for this customer.
    </Header>
    <Button primary>Add Document</Button>
  </Segment>


  <Segment placeholder raised>
    <Grid columns={2} stackable textAlign='center'>
      <Divider vertical>Or</Divider>

      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Header icon>
            <Icon name='search' />
            Find Country
          </Header>

          <Search placeholder='Search countries...' />
        </Grid.Column>

        <Grid.Column>
          <Header icon>
            <Icon name='world' />
            Add New Country
          </Header>
          <Button primary>Create</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>





    {/* Headers */}
    <Header as='h1' icon textAlign='center'>
        Headers
      <Header.Subheader>
        Exemplo de Header
      </Header.Subheader>
    </Header>

    <Header as='h1'>
    <Icon name='settings' />
    <Header.Content>
      Confirmação
      <Header.Subheader>Esse seria um subtitulo</Header.Subheader>
    </Header.Content>
  </Header>

  <Header as='h1'>
    Account Settings
    <Header.Subheader>
      Manage your account settings and set email preferences
    </Header.Subheader>
  </Header>

  <Header as='h2'>
    <Icon name='plug' />
    <Header.Content>Uptime Guarantee</Header.Content>
  </Header>


    {/* Modal */}
    <Header as='h2' dividing>Modals</Header>


    {/* AAA */}
    <Header as='h2' dividing>AAA</Header>


    <Grid columns={3} stackable>
      <Grid.Column>
        <Header as='h1' style={style.h1}>Heading 1</Header>
        <Header as='h2'>Heading 2</Header>
        <Header as='h3'>Heading 3</Header>
        <Header as='h4'>Heading 4</Header>
        <Header as='h5'>Heading 5</Header>

        <p>
          Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies
          vehicula.
        </p>
      </Grid.Column>

      <Grid.Column>
        <Header as='h2'>Example body text</Header>

        <p>
          Nullam quis risus eget <a href='#'>urna mollis ornare</a> vel eu leo. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh
          ultricies vehicula.
        </p>
        <p>
          <small>This line of text is meant to be treated as fine print.</small>
        </p>
        <p>
          The following snippet of text is <strong>rendered as bold text</strong>.
        </p>
        <p>
          The following snippet of text is <em>rendered as italicized text</em>.
        </p>
        <p>
          An abbreviation of the word attribute is <abbr title='attribute'>attr</abbr>.
        </p>
      </Grid.Column>

      <Grid.Column>
        <Grid
          centered
          columns={3}
          padded
          stackable
          style={{ margin: '-1.5em', width: 400 }}
          textAlign='center'
        >
          <Grid.Column color='red' style={{ margin: '0.5em', height: 50 }}>
            Red
          </Grid.Column>
          <Grid.Column color='orange' style={{ margin: '0.5em', height: 50 }}>
            Orange
          </Grid.Column>
          <Grid.Column color='yellow' style={{ margin: '0.5em', height: 50 }}>
            Yellow
          </Grid.Column>
          <Grid.Column color='olive' style={{ margin: '0.5em', height: 50 }}>
            Olive
          </Grid.Column>
          <Grid.Column color='green' style={{ margin: '0.5em', height: 50 }}>
            Green
          </Grid.Column>
          <Grid.Column color='teal' style={{ margin: '0.5em', height: 50 }}>
            Teal
          </Grid.Column>
          <Grid.Column color='blue' style={{ margin: '0.5em', height: 50 }}>
            Blue
          </Grid.Column>
          <Grid.Column color='violet' style={{ margin: '0.5em', height: 50 }}>
            Violet
          </Grid.Column>
          <Grid.Column color='purple' style={{ margin: '0.5em', height: 50 }}>
            Purple
          </Grid.Column>
          <Grid.Column color='pink' style={{ margin: '0.5em', height: 50 }}>
            Pink
          </Grid.Column>
          <Grid.Column color='brown' style={{ margin: '0.5em', height: 50 }}>
            Brown
          </Grid.Column>
          <Grid.Column color='grey' style={{ margin: '0.5em', height: 50 }}>
            Grey
          </Grid.Column>
          <Grid.Column color='black' style={{ margin: '0.5em', height: 50 }}>
            Black
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>

    <Header as='h2' dividing>
      Menu
    </Header>

    <Grid columns={3} doubling>
      <Grid.Column>
        <Menu
          items={[
            { key: '1', name: 'link-1', content: 'Link' },
            { key: '2', name: 'link-2', content: 'Link' },
            { key: '3', name: 'link-3', content: 'Link' },
          ]}
          pointing
          secondary
        />
      </Grid.Column>

      <Grid.Column>
        <Menu
          items={[
            { key: '1', name: 'link-1', content: 'Link' },
            { key: '2', name: 'link-2', content: 'Link' },
            { key: '3', name: 'link-3', content: 'Link' },
          ]}
          pointing
          tabular
        />
      </Grid.Column>

      <Grid.Column>
        <Menu
          items={[
            { key: 'l1', name: 'link-1', content: 'Link' },
            { key: 'l2', name: 'link-2', content: 'Link' },
            { key: 't1', name: 'text-1', content: 'Right text', position: 'right' },
          ]}
          pointing
        />
      </Grid.Column>
    </Grid>

    <Header as='h2' dividing>
      Buttons
    </Header>

    <Grid columns='equal'>
      <Grid.Column>
        <Button>Default</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button basic>Basic</Button>
        <Button compact>Compact</Button>

        <Divider />

        <Button icon='heart' />
        <Button content='Labeled' icon='heart' labelPosition='left' />
        <Button content='Labeled' icon='heart' labelPosition='right' />

        <Divider />

        <Button.Group>
          <Button>Combo</Button>
        </Button.Group>

        <Divider />

        <Button animated>
          <Button.Content visible>Horizontal</Button.Content>
          <Button.Content hidden>Hidden</Button.Content>
        </Button>
        <Button animated='vertical'>
          <Button.Content visible>Vertical</Button.Content>
          <Button.Content hidden>Hidden</Button.Content>
        </Button>
        <Button animated='fade'>
          <Button.Content visible>Fade In</Button.Content>
          <Button.Content hidden>Hidden</Button.Content>
        </Button>

        <Divider />

        <Button disabled>Disabled</Button>
        <Button loading>Loading</Button>

        <Divider />

        <Button.Group>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
        </Button.Group>

        <Button.Group>
          <Button icon='align left' />
          <Button icon='align center' />
          <Button icon='align right' />
          <Button icon='align justify' />
        </Button.Group>

        <Button.Group>
          <Button>1</Button>
          <Button.Or />
          <Button>2</Button>
        </Button.Group>

        <Divider />

        <Button.Group attached='top' widths={2}>
          <Button>One</Button>
          <Button>Two</Button>
        </Button.Group>
        <Segment attached>
          <Image src='/images/wireframe/paragraph.png' />
        </Segment>
        <Button.Group attached='bottom' widths={2}>
          <Button>One</Button>
          <Button>Two</Button>
        </Button.Group>
      </Grid.Column>

      <Grid.Column>
        <Button size='mini'>Mini</Button>
        <Button size='tiny'>Tiny</Button>
        <Button size='small'>Small</Button>
        <Button size='large'>Large</Button>
        <Button size='big'>Big</Button>
        <Button size='huge'>Huge</Button>
        <Button size='massive'>Massive</Button>

        <Divider />

        <Button color='yellow' style={{ marginBottom: '1em' }}>
          Yellow
        </Button>
        <Button color='orange' style={{ marginBottom: '1em' }}>
          Orange
        </Button>
        <Button color='green' style={{ marginBottom: '1em' }}>
          Green
        </Button>
        <Button color='teal' style={{ marginBottom: '1em' }}>
          Teal
        </Button>
        <Button color='blue' style={{ marginBottom: '1em' }}>
          Blue
        </Button>
        <Button color='purple' style={{ marginBottom: '1em' }}>
          Purple
        </Button>
        <Button color='pink' style={{ marginBottom: '1em' }}>
          Pink
        </Button>
        <Button color='red' style={{ marginBottom: '1em' }}>
          Red
        </Button>
        <Button color='black' style={{ marginBottom: '1em' }}>
          Black
        </Button>

        <Divider />

        <Segment inverted>
          <Button inverted>Inverted</Button>
          <Button basic inverted>
            Basic
          </Button>
          <Button color='blue' inverted>
            Colored
          </Button>
          <Button basic color='blue' inverted>
            Basic Colored
          </Button>
        </Segment>
      </Grid.Column>
    </Grid>
  </Container>
    </div>
  );
}

export default App;

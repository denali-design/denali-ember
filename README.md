# @denali-design/ember [![Pipeline Status][status-image]][status-url]

:construction: (WIP) Ember.JS component library for the Denali CSS Framework

## Compatibility

- Ember.js v3.16 or above
- Ember CLI v2.13 or above
- Node.js v10 or above

## Installation

```
ember install @denali-design/ember
```

## Containerizing

To build docker image locally make sure you have docker agent installed and deamon is running.

https://docs.docker.com/docker-for-windows/install/
https://docs.docker.com/docker-for-mac/install/

1. Command to build the docker image

```
docker build -t denali-ember .
```

2. Check docker images

```
docker images | grep denali-ember
```

3. Run the docker image and optionally map the port

```
docker run -p 49160:9001 -d  denali-ember
```

4. Check docker container is running and you can tail logs using

```
 docker ps
 docker logs -f <CONTAINER ID>
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).

[status-image]: https://cd.screwdriver.cd/pipelines/4792/badge
[status-url]: https://cd.screwdriver.cd/pipelines/4792

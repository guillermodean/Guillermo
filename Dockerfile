FROM node:14-alpine
ENV NODE_ENV=production
ENV PORT=8080
WORKDIR /projects/Guillermo
COPY . . 
RUN npm install --silent
EXPOSE 8080
# RUN chown -R node /projects/Guillermo
# USER node
CMD ["npm", "start"]

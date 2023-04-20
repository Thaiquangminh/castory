<template>
  <LayoutCard title="Tuần 1 thi đại học" subtitle="Bộ thẻ:" type="CÂU HỎI">
    <v-layout class="d-flex flex-column">
      <v-flex class="mb-2 justify-center d-flex">
        <h4>
          Phân biệt <span class="font-weight-bold text-2">elder</span> và
          <span class="font-weight-bold text-2">elderly</span>
        </h4>
      </v-flex>
      <v-flex>
        <label for="answer" class="card-answer">Câu trả lời:</label>
        <InputComponent :inputProps="answerInput" />
      </v-flex>
      <v-flex class="d-flex align-center justify-space-between">
        <div class="d-flex">
          <div>Số thẻ mới:<span class="ml-2 text-1">140</span></div>
          <div class="ml-8">
            Số thẻ cần ôn:<span class="ml-2 text-2">42</span>
          </div>
        </div>
        <ButtonComponent title="Đáp án" icon="fa-arrow-right" />
      </v-flex>
    </v-layout>
  </LayoutCard>
</template>

<script>
import LayoutCard from "@/components/layout/LayoutCard.vue";
import InputComponent from "@/components/ui/InputComponent.vue";
import ButtonComponent from "@/components/ui/ButtonComponent.vue";

export default {
  components: { ButtonComponent, InputComponent, LayoutCard },
  data() {
    return {
      answerInput: {
        placeholder: "Nhập câu trả lời của bạn",
        id: "answer",
      },
    };
  },
};
</script>

<style lang="sass" scoped>
h4
  font-size: 28px
  font-weight: 400
.card-answer
  font-weight: 600

// will change later
.text-1
  color: #3887FE
.text-2
  color: #1BB763
</style>

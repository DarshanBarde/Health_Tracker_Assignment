import { Component, Inject, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chartwise-rep',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chartwise-rep.component.html',
  styleUrls: ['./chartwise-rep.component.scss']
})
export class ChartwiseRepComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart: any;
  usernames: string[] = [];
  selectedUser: string | null = null;

  constructor(@Inject(PLATFORM_ID) private platformId: object, private cdr: ChangeDetectorRef) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadUsernames();
    }
  }

  ngAfterViewInit() {
    this.cdr.detectChanges(); // Ensure the ViewChild reference is updated
  }

  loadUsernames() {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
        this.usernames = Array.from(new Set(workouts.map((workout: { userName: string }) => workout.userName)));
      } catch (error) {
        console.warn('localStorage is not available or empty.');
      }
    }
  }

  loadChartData(userName: string) {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const workouts = JSON.parse(localStorage.getItem('workouts') || '[]');
        
        // Filter workouts by selected username
        const userWorkouts = workouts.filter((workout: any) => workout.userName === userName);
        
        // Process the data
        const data = this.processWorkoutsData(userWorkouts);

        this.selectedUser = userName;
        this.cdr.detectChanges(); // Ensure Angular updates the view before accessing the canvas

        setTimeout(() => {  // Ensure the DOM is updated before accessing canvas
          this.createChart(data);
        });
      } catch (error) {
        console.warn('localStorage is not available or empty.');
      }
    }
  }

  processWorkoutsData(workouts: any[]) {
    const workoutTypeMinutes: { [key: string]: number } = {};

    workouts.forEach(workout => {
      const type = workout.workoutType;
      const minutes = workout.workoutMinutes || 0;

      workoutTypeMinutes[type] = (workoutTypeMinutes[type] || 0) + minutes;
    });

    return {
      labels: Object.keys(workoutTypeMinutes),
      data: Object.values(workoutTypeMinutes)
    };
  }

  createChart(chartData: { labels: string[], data: number[] }) {
    if (!this.chartCanvas?.nativeElement) {
      console.error('Canvas element not found!');
      return;
    }

    if (this.chart) {
      this.chart.destroy();
    }

    Chart.register(...registerables);
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: chartData.labels,
        datasets: [{
          label: 'Workout Minutes',
          data: chartData.data,
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max:60
          }
        }
      }
    });
  }
}